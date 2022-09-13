Describe: BankAccount()

Test: "It should store a list of bank accounts."
Code: const account = new BankAccount()
Expected Output: user1, user2, user3

Describe: BankUser()

Test: "It should store the user name and money balance of the account."
Code: const bankUser1 = new BankUser(firstName,LastName,balance)
Expected Output: "John Smith, $3.00";

Describe: addAccount()

Test: "It should add user's account into the list of bank accounts."
Code: account.addAccount(bankUser1)
account;
Expected Output: "John Smith, $3.00"

Describe: assignId()

Test: "It should assign an ID whenever a new account is made, incrementing by +1."
Code: this.accountId += 1; return this.accountId;
Expected output: bankAccount[1], bankAccount[2]

Describe: "depositToBalance(amount)"

Test: "It should return the sum of the current balance added to the amount the user inputs."
Code: depositToBalance(546){
  this.balance += amount;
  return this.balance;
};
Expected Output: 546

Describe: "withdrawFromBalance(amount)"

Test: "It should return the subtracted version of the current balance."
Code: user1.depositToBalance(46){
  this.balance -= 46;
  return this.balance;
};
Expected Output: 500