let date = new Date();
let dayOfMonth = date.getDate();
let month = date.getMonth() +1;
let year = date.getFullYear();

let dateToday = (dayOfMonth + "/" + month + "/" + year);

const account = [];

function credit(money) {
  let newDeposit = {
    transaction: "deposit"
  };
  newDeposit.date = dateToday;
  newDeposit.amount = money;
  account.push(newDeposit);
}

function debit(money) {
  let newWithdrawal = {
    transaction: "withdrawal"
  };
  newWithdrawal.date = dateToday;
  newWithdrawal.amount = money;
  account.push(newWithdrawal);
}
