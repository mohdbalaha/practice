function chunkArrayInGroups(arr, size) {
  // Break it up.
  var array = [];
  for (var i = 0; i < arr.length; i += size) {
    array.push(arr.slice(i, size + i))
  }
  console.log(array);
  return array;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);