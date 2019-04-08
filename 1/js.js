'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD","2019-04-08");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let articleExpense = prompt("Введите обязательную статью расходов в этом месяце","");
let expense = prompt("Во сколько обойдется?","");
let articleExpense1 = prompt("Введите обязательную статью расходов в этом месяце","");
let expense1 = prompt("Во сколько обойдется?","");

appData.expenses.articleExpense = expense;
appData.expenses.articleExpense1 = expense1;
alert(+appData.budget / 30);