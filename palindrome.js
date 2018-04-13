function palindrome(str) {
    // Good luck!
    var string = str.toLowerCase();
    string = string.replace(/\W/g, '');
    string = string.replace(/_/g, '');

    var arr1 = string.split('');
    arr1.reverse();
    var reversedStr = arr1.join('')
    console.log(string,reversedStr);
    if (string === reversedStr) {
        return true;
    } else {
        return false;
    }
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));

