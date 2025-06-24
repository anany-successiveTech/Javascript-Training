// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposite(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${this.owner} deposited the ${amount}`);
      console.log(`Your balance : ${this.balance}`);
    } else {
      console.log(`Amount should be greater than 0`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`${this.owner} withdrew: ${amount}`);
      console.log(`Your balance is : ${this.balance}`);
    } else {
      console.log(`Invalid withdrawal amount`);
    }
  }

  displayBalance() {
    console.log(`${this.owner}'s balance is: ${this.balance}`);
  }
};

const myAccount = new BankAccount("Anany more", 50000);
myAccount.deposite(1000);
myAccount.withdraw(50000);
myAccount.displayBalance();
