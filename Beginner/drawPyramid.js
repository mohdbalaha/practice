function drawPyramid(size) {
    // your code here
    let i = 0;
    while (i < size) {
        let j = 1;
        let k = 1;
        let str = '';
        while (j < size - i) {
            str = str + ' ';
            j++;
        }
        while (k <= 2 * i + 1) {
            str = str + '#';
            k++;
        }
        console.log(str);
        i++;
    }
}
drawPyramid(15);