function fearNotLetter(str) {
  var char = str.charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== char) {
      return String.fromCharCode(char);
    }
    char++;
  }
  return undefined;
}

console.log(fearNotLetter("abce"));// should return "d".
console.log(fearNotLetter("abcdefghjklmno"));// should return "i".
console.log(fearNotLetter("bcd"));// should return undefined.
console.log(fearNotLetter("yz"));// should return undefined.

