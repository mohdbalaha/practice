
function sumPrimes(num) {
  var sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i
    }
  }

  function isPrime(num) {
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 27, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    return primes.filter(function (n) {
      return n <= Math.sqrt(num);
    }).every(function (n) {
      return num % n !== 0;
    })
  }

  
  return sum;
}



sumPrimes(10);// should return a number.
sumPrimes(10);// should return 17.
sumPrimes(977);// should return 73156.


