
function pairwise(arr, arg) {
  var sum=0;
  var array=[];
  arr.forEach(function (i1, x1) {
    arr.forEach(function (i2, x2) {
      if (x1 !== x2 && i1 + i2 === arg&&array.indexOf(x1)===-1&&array.indexOf(x2)===-1) {
        array.push(x1,x2);
        sum+=x1+x2;
      }
    });
  });
  return sum;
}

pairwise([1, 4, 2, 3, 0, 5], 7);// should return 11.
pairwise([1, 3, 2, 4], 4);// should return 1.
pairwise([1, 1, 1], 2);// should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1);// should return 10.
pairwise([], 100);// should return 0.
