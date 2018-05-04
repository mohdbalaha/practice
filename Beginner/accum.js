function accum(s) {
    // your code
    let array = [];
    let string = ''

    function repeat(num, char) {
        let str = ''
        for (i = 0; i < num; i++) {
            str += char;
        }
        return str;
    }

    function capitalizeFirst(str) {
        let arr = [];
        let newStr = '';
        for (let index = 0; index < str.length; index++) {
            let item = str[index];
            if (index === 0) {
                arr.push(item.toUpperCase());
            } else {
                arr.push(item.toLowerCase());
            }
        }
        newStr = arr.join('');
        return newStr;
    }

    for (let index in s) {

        array.push(capitalizeFirst(repeat(Number(index) + 1, s[index])));
    }
    string = array.join('-');
    return string;

}

console.log(accum('NOUR'));