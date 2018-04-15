
function mutation(arr) {
  var first = arr[0].toLowerCase().split('');
  var second = arr[1].toLowerCase().split('');
  for (var i = 0; i < second.length; i++) {

    if (first.indexOf(second[i]) === -1) {
      return false;
    }

  }
  return true;
}

console.log(mutation(["hello", "hey"]));//should return false.
console.log(mutation(["hello", "Hello"])); //should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));// should return true.
console.log(mutation(["Mary", "Army"])); //should return true.
console.log(mutation(["Mary", "Aarmy"])); //should return true.
console.log(mutation(["Alien", "line"]));//should return true.
console.log(mutation(["floor", "for"])); //should return true.
console.log(mutation(["hello", "neo"]));//should return false.
console.log(mutation(["voodoo", "no"])); //should return false.
