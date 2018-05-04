
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function check(item) {
    if (item === false || item === null || item === 0 || item === "" || item === undefined || Number.isNaN(item)) {
      return false;
    }
    return true;
  }
  return arr.filter(check);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));// should return [].
console.log(bouncer([1, null, NaN, 2, undefined]));// should return [1, 2].