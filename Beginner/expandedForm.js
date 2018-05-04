// function expandedForm(num) {
//     // Your code here
//     let str = num.toString();
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         arr.push(Number(str[i]));
//     }
//     for (let x = 0; x < arr.length; x++) {
//         let z = arr.length - x;
//         arr[x] = arr[x] * Math.pow(10, z - 1);
//     }
//     let newArr = [];
//     arr.forEach(function (number) {
//         if (number !== 0) {
//             newArr.push(number);
//         }
//     });
//     return newArr.join(' + ');
// }

function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }
  
console.log(expandedForm(30502));