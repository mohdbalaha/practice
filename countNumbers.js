function count(string) {
    // The function code should be here
    let obj = {};
    let arr = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        arr.push(char);
        obj[char] = 0;
    }

    for (let key in arr) {
        let char1 = arr[key];
        console.log(char1);
        obj[char1] += 1;

    }


    return obj;
}
console.log(count('abaaaaaaabb'));