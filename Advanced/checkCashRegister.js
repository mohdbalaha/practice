
function checkCashRegister(price, cash, cid) {
    var change = [];
    // Here is your change, ma'am.

    // money to return
    var remain = (cash - price) * 100;
    //money in drawer
    var money = cid.reduce(function (a, b) {
        return a + b[1];
    }, 0) * 100;

    if (money < remain) {
        console.log("Insufficient Funds");
        return "Insufficient Funds";
    } else if (money === remain) {
        console.log("Closed");
        return "Closed";
    } else {

        cid = cid.reverse().map(function (arr) {
            return [arr[0], Math.round(arr[1] * 100)];
        });
        var coins = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
        cid.forEach(function (arr, i) {

            var count = 0;
            if (remain > coins[i]) {

                while (remain >= coins[i] && arr[1] > 0) {
                    remain -= coins[i];
                    arr[1] -= coins[i];
                    count++;
                }

            }
            change.push([arr[0], coins[i] * count]);
        });

    }

    change = change.filter(function (arr) {
        return arr[1] !== 0;
    }).map(function (arr1) {
        return [arr1[0], arr1[1] * 0.01];
    });

    var sum = change.reduce(function (a, b) {
        return a + b[1];
    }, 0);
    if (sum < remain) {
        console.log("Insufficient Funds");
        return "Insufficient Funds";
    } else {
        console.log(change);
        return change;
    }
}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);// should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);// should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return "Closed".