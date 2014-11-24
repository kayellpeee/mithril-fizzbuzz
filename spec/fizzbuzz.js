function testMithril(mockWindow) {
  window = m.deps(mockWindow);

  test(function(){
    return typeof fizzbuzz === 'object';
  });

  test(function(){
    // model should be a function
    return typeof fizzbuzz.number === 'function';
  });
  test(function(){
    // should return a function
    return typeof fizzbuzz.number() === 'function';
  });
  test(function(){
    // should return 0 from first call
    var num = fizzbuzz.number();
    return num() === 0;
  });
  test(function(){
    // should increment by 1 each time function is called
    var num = fizzbuzz.number();
    num();
    return num() === 1;
  });

  test(function(){
    // controller should be a function
    return typeof fizzbuzz.controller === 'function';
  });
  test(function(){
    // view model should be an object
    return typeof fizzbuzz.vm === 'object';
  });
  test(function(){
    // controller should initialize view model for current view
    fizzbuzz.controller();
    return typeof fizzbuzz.vm.number === 'function';
  });
  test(function(){
    // numberCheck should return number or proper string accoding to fizzbuzz rules
    fizzbuzz.controller();
    return fizzbuzz.vm.numberCheck(30) === 'FIZZBUZZ';
  });

  test(function(){
    // view should be a function that interacts with controller
    return typeof fizzbuzz.view === 'function';
  });
  test(function(){
    // should follow proper fizzbuzz rules (i.e. FIZZ if n % 3, BUZZ n % 5, FIZZBUZZ n % 5 & 3. else n)
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
