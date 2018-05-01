
function flattenDeepArray(arr) {
    // I'm a steamroller, baby

    // return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeepArray(val)) : acc.concat(val), []);

    return arr.reduce(function (acc, val) {
        if (Array.isArray(val)) {
            return acc.concat(flattenDeepArray(val));
        } else {
            return acc.concat(val);
        }
    }, []);

}

console.log(flattenDeepArray([1, [2], [3, [[4]]]]));