let str = 'Hello everyone from 1 to 10 this is my email : nourbalaha0@gmail.com and mohdbalaha@yahoo.co.jp and phone : 080-8913-2305';
let phone = /\d{3}-\d{4}-\d{4}/;
let email = /\w+@\w+.(com|net|co.jp)/g;

//regex methods
// console.log(phone.test(str));
// console.log(email.exec(str));
// console.log(email.exec(str));
// console.log(email.lastIndex);

//string methods
// console.log(str.replace(/\d/g,'x'));
// console.log(str.replace(email,'no email'));
// console.log(str.match(email));


//a function that checks if the password contains an uppercase a number and a special character
function checkPass(string) {
    let pass1 = /[A-Z]/;
    let pass2 = /\d\W/;
    if (pass1.test(password) && pass2.test(password)) {
        return true;
    } else {
        return false;
    }
}
let password = 'Nour1988$$';
// console.log(checkPass(password));