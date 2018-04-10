function explode(s) {
    let num = 0;
    let array = [];
    let string = '';

    function repeat(x) {
        let str = ''
        for (let i = 1; i <= x; i++) {
            str += x;
        }
        return str;
    }

    for (let x = 0; x < s.length; x++) {
        num = Number(s[x]);
        array.push(repeat(num));
    }
    
    string = array.join('');
    return string;
}

console.log(explode('23456'));
