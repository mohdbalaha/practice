let left =0;
function zero(opp) {left = 0}
function one(opp) { 
    left = 1; 

}
function two(opp) { left = 2; }
function three(opp) { left = 3; }
function four(opp) { left = 4; }
function five(opp) { left = 5; }
function six(opp) { left = 6; }
function seven(opp) { left = 7; }
function eight(opp) { left = 8; }
function nine(opp) { left = 9; }

function plus(num) { return lnum + rnum }
// function minus(num) { return lnum - rnum }
// function times(num) { return lnum * rnum }
// function dividedBy(num) { return lnum / rnum }

// function operator(oper, lnum, rnum) {
//     if (oper = plus()) {
//         o = 'plus';
//         return plus(lnum, rnum);
//     }
//     if (oper = minus()) {
//         o = 'minus';
//         return minus(lnum, rnum);
//     }
//     if (oper = times()) {
//         o = 'times';
//         return times(lnum, rnum);
//     }
//     if (oper = dividedBy()) {
//         o = 'dividedBy';
//         return dividedBy(lnum, rnum);
//     }
// }

// function whatNum(num) {
//     if (num === 'zero') { return 0 }
//     if (num === 'one') { return 1 }
//     if (num === 'two') { return 2 }
//     if (num === 'three') { return 3 }
//     if (num === 'four') { return 4 }
//     if (num === 'five') { return 5 }
//     if (num === 'six') { return 6 }
//     if (num === 'seven') { return 7 }
//     if (num === 'eight') { return 8 }
//     if (num === 'nine') { return 9 }
// }

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

console.log(one(plus(two())));