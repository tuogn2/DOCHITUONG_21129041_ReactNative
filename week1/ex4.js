// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.



function calculatorBillTips(moneyWillPay) {

    return moneyWillPay > 50 && moneyWillPay < 300 ? moneyWillPay * 0.15 : moneyWillPay * 0.2
}


var tip = calculatorBillTips(275);
console.log(`The bill was 275, the tip was ${tip}, and the total value ${275 + tip}`)
var tip = calculatorBillTips(40);
console.log(`The bill was 40, the tip was ${tip}, and the total value ${40 + tip}`)
var tip = calculatorBillTips(430);
console.log(`The bill was 430, the tip was ${tip}, and the total value ${430 + tip}`)