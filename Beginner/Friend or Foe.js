function friend(array) {
    //your code here
    let newArray = array.filter(function (str) {
        if (str.length === 4) {
            return true;
        } else {
            return false;
        }
    });
    return newArray;
}

let friends = ["Ryan", "Kieran", "Jason", "Yous"];
let newOne = friend(friends);
console.log(newOne);