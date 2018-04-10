function drawTriangle(size) {
    let i = 0;
    let str = '';

    while (i < size) {
        str = str + '*';
        console.log(str);
        i++;
    }
}
drawTriangle(15);