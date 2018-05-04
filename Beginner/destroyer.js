
function destroyer(arr) {
  // Remove all the values
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return arr.filter(function (item) {
            return args.indexOf(item) === -1;
  });

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));// should return [1,1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));// should return [1].
console.log(destroyer([2, 3, 2, 3], 2, 3));// should return [].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));// should return ["hamburger"].