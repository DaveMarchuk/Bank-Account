// Business Logic for Bank Account
function BankAccount()  {
  this.accountId = 0;
  this.bankUsers = {};
}

BankAccount.prototype.addAccount = function(bankUser) {
  bankUser.id = this.assignID();
  this.bankUsers[bankUser.id] = bankUser;
};

BankAccount.prototype.assignID = function() {
  this.accountId =+ 1;
  return this.accountId;
}

// Business Logic for Bank User
function BankUser(userName,balance)  {
  this.userName = userName;
  this.balance = parseInt(balance);
}

BankUser.prototype.depositToBalance = function(depositAmount)  {
  this.balance += depositAmount;
  return this.balance;
}

BankUser.prototype.withdrawFromBalance = function(withdrawAmount) {
  this.balance -= withdrawAmount;
  return this.balance;
}