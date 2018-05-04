function creatAccount(init) {
  let ammount = init;

  return {
    deposit: function (sum) {
      ammount += sum;
      return ammount;
    },

    withdraw: function (sum) {
      if (ammount < sum) {
        console.log('No Sufficient funds!');
      } else {
        ammount -= sum;
        return ammount;
      }
    },

    showBalance: function () {
      return `Your Current Balance is: ${ammount}$`;
    }
  };
}
account1 = creatAccount(1000);
console.log(account1.showBalance());

account1.deposit(500);
console.log(account1.showBalance());

account1.deposit(20000);
console.log(account1.showBalance());

account1.withdraw(22500);
console.log(account1.showBalance());

