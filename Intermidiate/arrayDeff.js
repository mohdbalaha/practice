function array_diff(a, b) {
  return a.filter(function (v) { return b.indexOf(v) === -1 });
}
arr1 = [1, 2, 2];
arr2 = [2];
console.log(array_diff(arr1, arr2));