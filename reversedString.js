function solution(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.unshift(str[i]);
    }
    let newStr = arr.join('');
    console.log(newStr);
}