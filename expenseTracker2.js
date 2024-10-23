const Account = {
    name : 'Daud' ,
    expenses : [] ,
    income : [],
    addExpense : function (description, amount) {
      this.expenses.push({
        description : description,
        amount : amount}
    )},
    addIncome : function (description, amount) {
        this.income.push({
        description : description,
        amount : amount
        })
    },
    getAccountSummary : function() {
        let TotalExpenses = 0
        let TotalIncome = 0
        let accountBalance = 0
        
        this.expenses.forEach(function(expense) {
            TotalExpenses = TotalExpenses + expense.amount
        })

        this.income.forEach(function (income) {
            TotalIncome = TotalIncome + income.amount
        })
        accountBalance = TotalIncome - TotalExpenses
        return `${this.name} has $${TotalExpenses} in expenses. His income is $${TotalIncome}. The Account Balance is $${accountBalance}.` 
    }
}

Account.addExpense('Rent', 10000)
Account.addExpense('Grocery', 5000)
Account.addIncome('Job', 20000)
Account.addIncome('Freelancing', 10000)
console.log(Account.getAccountSummary())


