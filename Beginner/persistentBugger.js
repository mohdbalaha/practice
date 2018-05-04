function persistence(num) {
    //code me
    let arr = num2arr(num);
    let x =0;
    while (arr.length > 1) {
        num = product(arr);
        arr = num2arr(num);
        x++;
    }
    return x;

    function num2arr(num) {
        let str = num.toString();
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            arr.push(Number(str[i]));
        }
        return arr;
    }

    function product(array) {
        let num = array.reduce(function (pro, number) {
            return pro *= number;
        });
        return num;
    }
}
console.log(persistence(999));