function tree(num) {
  str = '';
  for (let i = 0; i < num; i++) {

    for (let j = 0; j < num - i - 1; j++) {
      str = str + ' ';
    }

    for (let k = 0; k < i * 2 + 1; k++) {
      str = str + '*';
    }
    str = str + '\n';

  }

  console.log(str + ' '.repeat(num - 1) + '||' + '\n' + ' '.repeat(num - 1) + '||');
}

tree(7);