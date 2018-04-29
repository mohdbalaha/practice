
function sumFibs(num) {
  if (num === 1) {
    return 1;
  } else if (num === 2) {
    return 2;
  } else {
    var arr = [1, 1, 2];
    var i = 0;
    while (i < num) {
      i = arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(i);
    }
    return arr.filter(function (item) {
      return item % 2 === 1;
    }).filter(function (item) {
      return item <= num;
    }).reduce(function (a, b) {
      return a + b;
    });
  }
}

// sumFibs(1);// should return a number.
// sumFibs(1000);// should return 1785.
// sumFibs(4000000);// should return 4613732.
// sumFibs(4);// should return 5.
// sumFibs(75024);// should return 60696.
// sumFibs(75025);// should return 135721.

