function uniteUnique(arr) {
  var newArr = [];
  var args = Array.from(arguments).reduce(function (acum, current) {
    return acum.concat(current);
  });

  var count = 0;
  args.forEach(function (item) {

    if (count === args.indexOf(item)) {
      newArr.push(item);
    }
    count++
  });
  return newArr;
}



uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);// should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);// should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]);// should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);// should return [1, 2, 3, 5, 4, 6, 7, 8].