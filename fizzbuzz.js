// fizzbuzz app
var fizzbuzz = {};

// model
fizzbuzz.number = function(num){
  return num + 1 || 0;
};

// controller
fizzbuzz.controller = function(){
  var number = m.prop(fizzbuzz.number());
  return {
    number: number,
    increment: function(){
      return number(fizzbuzz.number(number()));
    }
  };
};

// view
fizzbuzz.view = function(ctrl){
  return [
    m("p", ctrl.number()),
    m("button", {onclick: ctrl.increment}, "+1")
  ];
};

//initialize
m.module(document.body, fizzbuzz);
