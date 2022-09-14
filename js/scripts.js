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

BankAccount.prototype.findAccount = function(id)  {
  if (this.bankUsers[id] !== undefined) {
    return this.contacts[i];
  }
  return fals
}
// Business Logic for Bank User
function BankUser(userName,balance)  {
  this.userName = userName;
  this.balance = parseInt(balance);
}

BankUser.prototype.depositToBalance = function(depositAmount)  {
  this.balance += parseInt(depositAmount);
  return this.balance;
}

BankUser.prototype.withdrawFromBalance = function(withdrawAmount) {
  this.balance -= parseInt(withdrawAmount);
  return this.balance;
}

// UI Logic
let bankAccount = new BankAccount();
let bankUser1 = new BankUser();

function depositOrWithdraw(event) {
  event.preventDefault();

  const balanceWithdrawal = document.querySelector("input#withdrawal-amount").value;
  console.log(balanceWithdrawal);
  const balanceDeposit = document.querySelector("input#deposit-amount").value;

  if (balanceWithdrawal > 0) {  
    
    document.getElementById("balance").innerText = bankUser1.withdrawFromBalance(balanceWithdrawal);
    console.log("current balance is" + bankUser1.withdrawFromBalance);
  }

  if (balanceDeposit > 0)  {
    return depositToBalance(balanceDeposit);
  }
}

function handleFormSubmission(event)  {
  event.preventDefault();
  const inputtedName = document.querySelector("input#new-user").value;
  const initialBalance = document.querySelector("input#initial-balance").value;
  let newUser = new BankUser(inputtedName,initialBalance);
  console.log(newUser);
  bankAccount.addAccount(newUser);
}

window.addEventListener("load", function() {
  document.querySelector("form#new-account").addEventListener("submit", handleFormSubmission);
  document.querySelector("form#balance").addEventListener("submit", depositOrWithdraw);
});