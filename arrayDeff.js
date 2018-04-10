// function array_diff(a, b) {
//   let arr = [];
// if(b.length===0) return a;
//     for (let i = 0; i < a.length; i++) {
      
//       for (let x = 0; x < b.length; x++) {
//         // if (a[i] !== b[x]) {
//         //   arr.push(a[i]);
//         // }
//         arr=a.filter(num=>num!==b[x]);
//       }
//     }
//     return arr;
  
// }
function array_diff(a, b) {
  return a.filter(function (v) { return b.indexOf(v) === -1 });
}
arr1 = [1, 2, 2];
arr2 = [2];
console.log(array_diff(arr1, arr2));