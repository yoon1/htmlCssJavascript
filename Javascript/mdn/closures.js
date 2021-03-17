function makeAdder(a) {
    return function(b) {
      return a + b;
    };
  }
var add5 = makeAdder(5);
var add20 = makeAdder(20);
var result = add5(6);
console.log(add5(6)); // ?
console.log(add20(7)); // ?
console.log(typeof(add5));
console.log(add5); // 
console.log(add20);
console.log(typeof(result));