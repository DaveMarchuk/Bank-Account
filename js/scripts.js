// Business Logic for Bank Account
function BankAccount()  {
  this.accountId = 0;
  this.bankUsers = {};
}

BankAccount.prototype.addAccount = function(bankUser) {
  this.bankUsers[bankUser.id] = bankUser;
};

BankAccount.prototype.assignID = function() {
  this.accountId =+ 1;
  return this.accountId;
}

// Business Logic for Bank User
function BankUser(firstName,lastName,balance)  {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}