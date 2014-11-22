/* global fizzbuzz, describe, it, expect, should */
function testMithril(mockWindow) {
  window = m.deps(mockWindow);

  test(function(){
    return typeof fizzbuzz === 'object';
  });

  // model should be a function that returns a number
  test(function(){
    return typeof fizzbuzz.number === 'function';
  });
  test(function(){
    return typeof fizzbuzz.number() === 'number';
  });
  // should return 0 if no number is passed in
  test(function(){
    return fizzbuzz.number() === 0;
  });
  // should increment by 1 if passed a number
  test(function(){
    var num = fizzbuzz.number();
    return fizzbuzz.number(num) === 1;
  });

  // controller should be a function that returns an object
  test(function(){
    return typeof fizzbuzz.controller === 'function';
  });
  test(function(){
    return typeof fizzbuzz.controller() === 'object';
  });
  test(function(){
    return typeof fizzbuzz.controller().update === 'function';
  });

  // view should be a function that interacts with controller
  test(function(){
    return typeof fizzbuzz.view === 'function';
  });
  // should follow proper fizzbuzz rules (i.e. FIZZ if n % 3, BUZZ n % 5, FIZZBUZZ n % 5 & 3. else n)
  test(function(){
    var root = mockWindow.document.createElement("div");
    m.render(root, fizzbuzz.view(fizzbuzz.controller()));

    test(function(){
      return root.childNodes[0].childNodes[0].nodeValue === "0";
    });
    test(function(){
      return root.childNodes[1].onclick() === 1;            // 1
    });
    test(function(){
      root.childNodes[1].onclick();                         // 2
      return root.childNodes[1].onclick() === "FIZZ";       // 3
    });
    test(function(){
      root.childNodes[1].onclick();                         // 4
      return root.childNodes[1].onclick() === "BUZZ";       // 5
    });
    test(function(){
      for( var i = 6; i < 15; i++){
        root.childNodes[1].onclick();                       // 6-14
      }
      return root.childNodes[1].onclick() === "FIZZBUZZ";   // 15
    });

    return root.childNodes[1].onclick() === 16;
  });

};

testMithril(mock.window);

test.print(function(value) {console.log(value)});
