
function sym() {
    var args = Array.from(arguments);
    return dbl(args.reduce(function (a, b) {
        return sym2(a, b);
    }, []));

    //Symmetric Difference between two arrays
    function sym2(arr1, arr2) {
        var array = [];
        arr1.forEach(function (i1) {
            if (arr2.indexOf(i1) === -1) {
                array.push(i1);
            }
        });
        arr2.forEach(function (i2) {
            if (arr1.indexOf(i2) === -1) {
                array.push(i2);
            }
        });
        return array;
    }

    //remove duplicated items
    function dbl(arr) {
        var array = [];
        arr.forEach(function (i) {
            if (array.indexOf(i) === -1) {
                array.push(i);
            }
        })
        return array;
    }
}


// console.log(sym([1, 2, 3], [5, 2, 1, 4]));// should return [3, 4, 5].
//   sym([1, 2, 3], [5, 2, 1, 4]);// should contain only three elements.
//   sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);// should return [1, 4, 5]
//   sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);// should contain only three elements.
//   sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);// should return [1, 4, 5].
//   sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);// should contain only three elements.
//   sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);// should return [2, 3, 4, 6, 7].
//   sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);// should contain only five elements.
//   sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);// should return [1, 2, 4, 5, 6, 7, 8, 9].
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));// should contain only eight elements.