
function factorial(start, end) {
    if (end === start - 1) {
        return 1;
    } else {
        return end * factorial(start, end - 1);
    }
}
console.log(factorial(2, 5));
