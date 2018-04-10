function initializeNames(name) {
    // Insert your brilliant code here
    let array = name.split(' ');
    let newArray = [];
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str = array[i];
        if (i === 0) {
            newArray.push(str);
        } else if (i === array.length - 1) {
            newArray.push(str);
        } else {
            newArray.push(str[0] + '.');
        }
    }
    return newArray.join(' ');
}
initializeNames('Mohamad Nour Hasan Balaha');