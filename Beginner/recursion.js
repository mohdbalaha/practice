
function inc(x) {
    return x + 1;
}

function dec(x) {
    return x - 1;
}

function add(start, end) {
    if (end === 0) {
        return start;
    }
    return add(inc(start), dec(end));
}
console.log(add(3, 5));

function addToTen(num, result) {
    if (num === 10) {
        return result;
    }
    return addToTen(num + 1, result + num);
}
console.log(addToTen(3, 0));


function sum(a, b) {
    if (a === 0) {
        return b;
    } else if (b === 0) {
        return a;
    } else if (a < 0) {
        return sum(++a, --b);
    } else if (b < 0) {
        return sum(--a, ++b);
    } else {
        return sum(++a, --b);
    }
}
console.log(sum(-3, -2));
console.log(sum(3, -2));
console.log(sum(-3, 2));
console.log(sum(3, 2));
