//Resst operator
function sumAll(...args) {
    //args is an array contains all the arguments of the function
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
let sum = sumAll(1, 2, 5, 8, 9, 33);
console.log(sum);

//Spread operator
//array inside of array or concat two arrays
let arr1 = [4, 5];
let arr2 = [1, 2, 3, ...arr1, 6];
console.log(arr2);
//Math
let max=(...args)=> Math.max(...args);
// let max = Math.max(...arr2);
console.log(max(2,5,9));