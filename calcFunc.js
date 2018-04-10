// //method 1
// //========
// var n = function(digit) {
//   return function(op) {
//     return op ? op(digit) : digit;
//   }
// };
// var zero = n(0);
// var one = n(1);
// var two = n(2);
// var three = n(3);
// var four = n(4);
// var five = n(5);
// var six = n(6);
// var seven = n(7);
// var eight = n(8);
// var nine = n(9);

// function plus(r) { return function(l) { return l + r; }; }
// function minus(r) { return function(l) { return l - r; }; }
// function times(r) { return function(l) { return l * r; }; }
// function dividedBy(r) { return function(l) { return l / r; }; }




// //method 2
// //========
// function zero(operator) {
//   return operator ? operator(0) : 0;
// }

// function one(operator) {
//   return operator ? operator(1) : 1;
// }

// function two(operator) {
//   return operator ? operator(2) : 2;
// }

// function three(operator) {
//   return operator ? operator(3) : 3;
// }

// function four(operator) {
//   return operator ? operator(4) : 4;
// }

// function five(operator) {
//   return operator ? operator(5) : 5;
// }

// function six(operator) {
//   return operator ? operator(6) : 6;
// }

// function seven(operator) {
//   return operator ? operator(7) : 7;
// }
// function eight(operator) {
//   return operator ? operator(8) : 8;
// }

// function nine(operator) {
//   return operator ? operator(9) : 9;
// }

// function plus(rightVal) {
//   return function(leftVal) {
//     return leftVal + rightVal;
//   }
// }

// function minus(rightVal) {
//   return function(leftVal) {
//     return leftVal - rightVal;
//   }
// }

// function times(rightVal) {
//   return function(leftVal) {
//     return leftVal * rightVal;
//   }
// }

// function dividedBy(rightVal) {
//   return function(leftVal) {
//     return leftVal / rightVal;
//   }
// }


// //method 3
// //========
// 'zero one two three four five six seven eight nine'.split(' ').forEach(
//   (mth, num) => this[mth] = (f = val => val) => f(num) 
// )

// let plus      = (r) => (l) => l + r
// let minus     = (r) => (l) => l - r
// let times     = (r) => (l) => l * r
// let dividedBy = (r) => (l) => l / r



//method 4
//========
function zero(func) {
  return func ? func(0) : 0;
};
function one(func) { return func ? func(1) : 1; };
function two(func) { return func ? func(2) : 2; };
function three(func) { return func ? func(3) : 3; };
function four(func) { return func ? func(4) : 4; };
function five(func) { return func ? func(5) : 5; };
function six(func) { return func ? func(6) : 6; };
function seven(func) { return func ? func(7) : 7; };
function eight(func) { return func ? func(8) : 8; };
function nine(func) { return func ? func(9) : 9; };

function plus(b) {
  return function (a) {
    return a + b;
  };
};

function minus(b) { return function (a) { return a - b; }; };
function times(b) { return function (a) { return a * b; }; };
function dividedBy(b) { return function (a) { return a / b; }; };


console.log(two(plus(three())));