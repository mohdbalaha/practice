// I 1      // V 5  
// X 10     // L 50
// C 100    // D 500    
// M 1000
// When a symbol appears after a larger (or equal) symbol it is added

// Example: VI = V + I = 5 + 1 = 6
// Example: LXX = L + X + X = 50 + 10 + 10 = 70
// But if the symbol appears before a larger symbol it is subtracted

// Example: IV = V − I = 5 − 1 = 4
// Example: IX = X − I = 10 − 1 = 9
// To Remember: After Larger is Added

// Don't use the same symbol more than three times in a row (but IIII is sometimes used for 4, particularly on clocks)

// How to Convert to Roman Numerals
// Break the number into Thousands, Hundreds, Tens and Ones, and write down each in turn.

// Break 1984 into 1000, 900, 80 and 4, then do each conversion

// 1000 = M
// 900 = CM
// 80 = LXXX
// 4 = IV
// 1000 + 900 + 80 + 4 = 1984, so 1984 = MCMLXXXIV


function convertToRoman(num) {
    var arr = splitNum(num);
    var newArr=arr.map(num=>convert(num));
    return newArr.join('');


    }

console.log(convertToRoman(97));

function splitNum(num) {
    var arr = [];
    var str = String(num);
    for (var i = 0; i < str.length; i++) {
        var x=str.length-i-1;
        arr.push(Number(str[i] + '0'.repeat(x)));
    }
    return arr;
}

function convert(num) {
    switch (num) {
        case 1:
            return 'I';
            break;
        case 2:
            return 'II';
            break;
        case 3:
            return 'II';
            break;
        case 4:
            return 'IV';
            break;
        case 5:
            return 'V';
            break;
        case 6:
            return 'VI';
            break;
        case 7:
            return 'VII';
            break;
        case 8:
            return 'VIII';
            break;
        case 9:
            return 'IX';
            break;

        case 10:
            return 'X';

            break;
        case 20:
            return 'XX';

            break;
        case 30:
            return 'XXX';

            break;
        case 40:
            return 'XL';

            break;
        case 50:
            return 'L';

            break;
        case 60:
            return 'LX';

            break;
        case 70:
            return 'LXX';

            break;
        case 80:
            return 'LXXX';

            break;
        case 90:
            return 'XC';

            break;

        case 100:
            return 'C';
            break;
        case 200:
            return 'CC';
            break;
        case 300:
            return 'CCC';
            break;
        case 400:
            return 'CD';
            break;
        case 500:
            return 'D';
            break;
        case 600:
            return 'DC';
            break;
        case 700:
            return 'DCC';
            break;
        case 800:
            return 'DCCC';
            break;
        case 900:
            return 'CM';
            break;

        case 1000:
            return 'M';
            break;
        case 2000:
            return 'MM';
            break;
        case 3000:
            return 'MMM';
            break;
    }
}
console.log(splitNum(97));