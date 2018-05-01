
function binaryAgent(str) {
    return str.split(' ').map(bi=>decToAscii(biToDec(bi))).join('');

    function biToDec(num) {
        var str = num.split('').map(n => Number(n));
        var n = 0;
        var arr = [128, 64, 32, 16, 8, 4, 2, 1];
    
        for (var i = 0; i < str.length; i++) {
            if (str[i] == 1) {
                n = n + arr[i];
            }
        }
        return n;
    }
    
    function decToAscii(num){
        return String.fromCharCode(num);
    }
}




console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));