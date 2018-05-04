
function largestOfFour(arr) {
  // You can do this!

  function max(array) {
    var maxNum = 0;
    for (var i = 0; i < array.length; i++) {
      if (maxNum < array[i]) {
        maxNum = array[i];
      }
    }
    return maxNum;
  }
  var newArr = arr.map(function (array) {
    return max(array);
  })
  return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

