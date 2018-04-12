function each(array, callback) {
    for (let item of array) {
        callback(item);
    }
}

function map(array, callback) {
    let arr = [];
    // for (let item of array) {
    //     arr.push(callback(item));
    // }
    each(array, item => arr.push(callback(item)));
    return arr;
}

console.log(map([1, 2, 3], num => num * num));
Í