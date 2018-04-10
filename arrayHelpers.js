function _square(num) {
    return num * num;
}

function _cube(num) {
    return num * num * num;
}

function _average(array) {
    return _sum(array) / array.length;
}

function _sum(array) {
    let total = 0;
    for (let item of array) {
        total += item;
    }
    return total;
}

function _even(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function _odd(num) {
    if (num % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

Array.prototype.square = function () {
    var input = this;
    var newArray = input.map(_square);
    return newArray;
}

Array.prototype.cube = function () {
    var input = this;
    var newArray = input.map(_cube);
    return newArray;
}

Array.prototype.average = function () {
    var input = this;
    return _average(input);
}

Array.prototype.sum = function () {
    var input = this;
    return _sum(input);
}


Array.prototype.even = function () {
    var input = this;
    var newArr=input.filter(_even);
    return newArr;
}

Array.prototype.odd = function () {
    var input = this;
    var newArr=input.filter(_odd);
    return newArr;
}

let arr = [1, 2, 3, 4, 5];

console.log(arr.square());
console.log(arr.cube());
console.log(arr.average());
console.log(arr.sum());
console.log(arr.even());
console.log(arr.odd());

