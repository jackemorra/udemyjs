var money = prompt("Ваш бюджет на месяц?","");
var time = prompt("Введите дату в формате YYYY-MM-DD","");
var appData = {
  money: money,
  timeData: time,
  expenses : {

  },
  optionalExpenses: {

  },
  income : {

  },
  savings: false
};

appData.expenses[0] = prompt("Введите обязательную статью расходов в этом месяце","");
appData.expenses[1] = prompt("Во сколько обойдется","");

alert(+money/30);
alert(appData.expenses[1]);
