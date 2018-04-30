function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var range = [];
  for (var x = min; x <= max; x++) {
    range.push(x);
  }
  var a = Math.abs(range[0]);
  for (var i = 1; i < range.length; i++) {
    var b = Math.abs(range[i]);
    var c = a;
    while (a && b) {
      if (a > b) {
        a = a % b;
      } else {
        b = b % a;
      }

    }
    a = Math.abs(c * range[i] / (a + b));
  }
  return a;
}

smallestCommons([1, 5]);// should return 60.
smallestCommons([5, 1]);// should return 60.
smallestCommons([1, 13]);// should return 360360.
smallestCommons([23, 18]);// should return 6056820.

