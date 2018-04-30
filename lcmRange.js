function leastCommonMultiple(min, max) {
    function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    function gcd(a, b) {
        //using recursion
        //   if(b===0){
        //       return a;
        //   }else{
        //       return gcd(b,a%b);
        //   }

        // using while
        // while(a!==b){
        //     a>b?a-=b:b-=a;
        // }
        // return a;

        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    var multiple = min;
    range(min, max).forEach(function (n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
}

console.log(leastCommonMultiple(1, 13)); // => 360360