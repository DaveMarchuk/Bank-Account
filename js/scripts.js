// Business Logic for Bank Account
function BankAccount()  {
  this.accountId = 0;
  this.bankUsers = {};
}

BankAccount.prototype.addAccount = function(bankUser) {
  this.bankUsers[bankUser.id] = bankUser;
};

// Business Logic for Bank User
function BankUser(firstName,lastName,balance)  {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}