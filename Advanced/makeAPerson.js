
var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    var firstName = firstAndLast.split(' ')[0];
    var lastName = firstAndLast.split(' ')[1];
    this.getFirstName = function () {
        return firstName;
    };

    this.getLastName = function () {
        return lastName;
    };

    this.getFullName = function () {
        return firstName + ' ' + lastName;
    };

    this.setFirstName = function (first) {
        firstName = first;
        return firstName;
    };

    this.setLastName = function (last) {
        lastName = last;
        return lastName;
    };

    this.setFullName = function (firstAndLast) {
        firstName = firstAndLast.split(' ')[0];
        lastName = firstAndLast.split(' ')[1];
        return firstName + ' ' + lastName;
    };

};

var bob = new Person('Bob Ross');
bob.getFullName();


// console.log(Object.keys(bob).length);// should return 6.
// console.log(bob instanceof Person);// should return true.
// console.log(bob.firstName);// should return undefined.
// console.log(bob.lastName);// should return undefined.
console.log(bob.getFirstName());// should return "Bob".
console.log(bob.getLastName());// should return "Ross".
console.log(bob.getFullName());// should return "Bob Ross".
bob.setFirstName("Haskell");
console.log(bob.getFullName());// should return "Haskell Ross" after .
bob.setLastName("Curry")
console.log(bob.getFullName());// should return "Haskell Curry" after .
console.log(bob.getFullName());// should return "Haskell Curry" after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName());// should return "Haskell" after bob.setFullName("Haskell Curry").
console.log(bob.getLastName());// should return "Curry" after bob.setFullName("Haskell Curry").