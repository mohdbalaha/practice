
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var newStr = str.substring(str.length - target.length);
  if (newStr === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "an"));

console.log('hello'.includes('elo'));
console.log('hello'.startsWith('hel'));
console.log('hello'.endsWith('lo'));