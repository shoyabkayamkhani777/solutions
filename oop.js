let Account = function (
  name,
  aadhar,
  mobile,
  address,
  accountNo,
  accountType,
  pancard,
  bank,
  balance
) {
  this.name = name;
  this.aadhar = aadhar;
  this.mobile = mobile;
  this.address = address;
  this.accountNo = accountNo;
  this.accountType = accountType;
  this.pancard = pancard;
  this.bank = bank;
  this.balance = balance;
  this.printStatement = balance ? balance : [];
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 && amount > this.balance) {
    console.log("sorry");
  } else {
    this.balance -= amount;
    console.log("Withdrawal successful. New balance: " + this.balance);
    this.printStatement.push(-amount)
  }

};

Account.prototype.deposit = function (amount) {
  if (amount <= 0) {
    console.log("sorry");
  } else {
    this.balance += amount;
    console.log("Deposit successful. New balance: " + this.balance);
  this.printStatement.push(amount)
  
  }
};

Account.prototype.changePin = function (pin) {
  let currentpin = Number(prompt("please enter  pin"));
  if (pin === newpin) {
    let newpin = prompt("Please enter your new pin");
    let confirmpin = prompt("Please enter your confirm pin");
    if (newpin === confirmpin) {
      pin = newpin;
    } else {
      alert("Your new password and confirm password did not match");
    }
  } else {
    showError();
  }
};

Account.prototype.printStatement = function () {
  
};
Account.prototype.calculateInterest = function () {
  let interestRate = 0;
  switch (this.bank) {
    case "HDFC":
      interestRate = 8;
      break;
    case "SBI":
      interestRate = 7;
      break;
    default:
      interestRate = 6;
  }
  let interest = (this.balance * interestRate) / 100;
  console.log(
    "Interest calculated. Rate: " + interestRate + "%, Interest: " + interest
  );
};

var account = new Account(
  "shoyab",
  "1234 5678 9012",
  "555-1234",
  "123 Main St",
  "1234567890",
  "Savings",
  "ABCDE1234F",
  "HDFC",
  10000000
);

console.log(account);
account.deposit(5000000);
account.withdraw(2000);
account.calculateInterest();
account.changePin(4321);
account.printStatement();
