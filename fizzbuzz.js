// fizzbuzz app
var fizzbuzz = {};

// model
fizzbuzz.number = function(){
  var number = -1;
  return function(){
    return number += 1;
  };
};

// controller
fizzbuzz.controller = function(){
  var number = fizzbuzz.number();
  var display = m.prop(number());
  var numberCheck = function(num){
    if( num % 3 === 0 && num % 5 === 0){
      return "FIZZBUZZ";
    }
    if( num % 3 === 0 ){
      return "FIZZ";
    }
    if( num % 5 === 0 ){
      return "BUZZ";
    }
    return num;
  };
  return {
    display: display,
    update: function(){
      return display(numberCheck(number()));
    }
  };
};

// view
fizzbuzz.view = function(ctrl){
  return [
    m("p", ctrl.display()),
    m("button", {onclick: ctrl.update}, "+1")
  ];
};

//initialize
m.module(document.body, fizzbuzz);
