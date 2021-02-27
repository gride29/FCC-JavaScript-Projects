const DENOMINATIONS = [
  ["PENNY", 1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 2000],
  ["ONE HUNDRED", 10000],
];

function checkCashRegister(price, cash, cid) {
  let amountToReturn = Math.round((cash - price) * 100);
  let cashOnHand = {};
  let cashToGive = {};

  cid.forEach((denomination) => {
    cashOnHand[denomination[0]] = Math.round(denomination[1] * 100);
  });

  let index = DENOMINATIONS.length - 1;

  while (index >= 0) {
    let moneyName = DENOMINATIONS[index][0];
    let moneyValue = DENOMINATIONS[index][1];

    if (amountToReturn - moneyValue > 0) {
      cashToGive[moneyName] = 0;
      while (cashOnHand[moneyName] > 0 && amountToReturn - moneyValue >= 0) {
        cashOnHand[moneyName] -= moneyValue;
        cashToGive[moneyName] += moneyValue;
        amountToReturn -= moneyValue;
      }
    }
    index--;
  }

  if (amountToReturn === 0) {
    let isRegisterEmpty = true;

    Object.keys(cashOnHand).forEach((moneyType) => {
      if (cashOnHand[moneyType] > 0) {
        isRegisterEmpty = false;
      }
    });

    if (isRegisterEmpty) {
      return {
        status: "CLOSED",
        change: cid,
      };
    } else {
      let output = [];
      Object.keys(cashToGive).map((moneyType) => {
        if (cashToGive[moneyType] > 0) {
          output.push([moneyType, cashToGive[moneyType] / 100]);
        }
      });
      return { status: "OPEN", change: output };
    }
  }
  return { status: "INSUFFICIENT_FUNDS", change: [] };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
