let myAccount = {
    name : 'Daud',
    expenses : 0,
    income : 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income 
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let accountSummary = function(account){
    let balance = account.income - account.expenses
    return `Account balance for ${account.name} has $${balance}. $${account.income} in income. The Expenses are $${account.expenses}`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(accountSummary(myAccount))

resetAccount(myAccount)
console.log(accountSummary(myAccount))

