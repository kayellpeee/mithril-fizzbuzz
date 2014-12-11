// fizzbuzz app
var fizzbuzz = {};

// model
fizzbuzz.number = function(){
  var number = -1;
  return function(){
    return number += 1;
  };
};

// vm
fizzbuzz.vm = (function(){
  var vm = {};
  vm.init = function(){
    vm.number = fizzbuzz.number();
    vm.display = m.prop(vm.number());
    vm.numberCheck = function(num){
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
    }
    vm.update = function(){
      return vm.display(vm.numberCheck(vm.number()));
    }
  }
  return vm;
}());

// controller
fizzbuzz.controller = function(){
  fizzbuzz.vm.init();
};

// view
fizzbuzz.view = function(){
  return [
    m("p", fizzbuzz.vm.display()),
    m("button", {onclick: fizzbuzz.vm.update}, "+1")
  ];
};

//initialize
m.module(document.body, fizzbuzz);
