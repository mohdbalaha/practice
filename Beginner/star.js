function star(num) {
    str = '';
    for (let i = 0; i < num; i++) {

        for (let j = 0; j < num - i; j++) {
            str = str + ' ';
        }

        for (let k = 0; k < i * 2 + 1; k++) {
            str = str + '*';
        }

        str = str + '\n';

    }

    for (let n = num; n >= 0; n--) {

        for (let j = 0; j < num - n; j++) {
            str = str + ' ';
        }

        for (let k = 0; k < n * 2 + 1; k++) {
            str = str + '*';
        }

        str = str + '\n';
    }

    console.log(str);
}

star(4);