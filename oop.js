// Define the Account prototype

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
};

// Define the Account methods
Account.prototype.withdraw = function (amount) {
  if (amount <= 0 && amount > this.balance) {
    console.log("sorry");
  } else {
    this.balance -= amount;
    console.log("Withdrawal successful. New balance: " + this.balance);
  }
};

Account.prototype.deposit = function (amount) {
  if (amount <= 0) {
    console.log("Deposit amount must be greater than 0.");
  } else {
    this.balance += amount;
    console.log("Deposit successful. New balance: " + this.balance);
  }
};

Account.prototype.changePin = function (pin) {
  let currentpin = Number(prompt("please enter  pin"));
  if (pin === pin) {
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
  console.log(this.balance);
};
Account.prototype.calculateInterest = function () {
  var interestRate = 0;
  switch (this.bank) {
    case "HDFC":
      interestRate = 0.08;
      break;
    case "SBI":
      interestRate = 0.07;
      break;
    default:
      interestRate = 0.06;
  }
  var interest = this.balance * interestRate;
  console.log(
    "Interest calculated. Rate: " +
      interestRate * 100 +
      "%, Interest: " +
      interest
  );
};

// Create an example account
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

// Call some methods
console.log(account);
account.deposit(5000000);
account.withdraw(2000);
account.calculateInterest();
//account.changePin(4321);
account.printStatement();
