function translatePigLatin(str) {

  if (vowelIndex(str) === 0) {
    return str + 'way';
  } else {
    return str.slice(vowelIndex(str), str.length) + str.slice(0, vowelIndex(str)) + 'ay';
  }

  function vowelIndex(string) {
    for (var i = 0; i < string.length; i++) {
      if (string[i].match(/(a|e|i|o|u)/)) {
        return i;
      }
    }
  }
  
}


console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".
console.log(translatePigLatin("glove")); // should return "oveglay".
console.log(translatePigLatin("algorithm")); // should return "algorithmway".
console.log(translatePigLatin("eight")); // should return "eightway".