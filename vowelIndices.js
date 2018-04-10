
function vowelIndices(word) {
    //your code here
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        let char = '';
        char = word[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            arr.push(i + 1);
        }
        if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            arr.push(i + 1);
        }
    }
    return arr;
}
console.log(vowelIndices('superbrAve'));
