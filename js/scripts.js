// Business Logic for Bank Account
function BankAccount()  {
  this.accountId = 0;
  this.bankUsers = {};
}



// Business Logic for Bank User
function BankUser(firstName,lastName,balance)  {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}