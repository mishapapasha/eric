//cc = currency convertor
var ccService1 = {};

ccService1.convertAmount = function(amount, fromCurrency, toCurrency) {
    if(!parseFloat(amount.value) || isNaN(amount.value)){
        console.log("Amount is not a number");
        return;
    }
    //console.log(amount.value);
    var activeFromCurrency = ciService.getCurrencyByKey(fromCurrency.innerHTML);
    var activeToCurrency = ciService.getCurrencyByKey(toCurrency.innerHTML);
    // console.log(activeFromCurrency);
    // console.log(activeToCurrency);
    var result = ciService.getCurrencyByKey(baseCurrency).currency;
    result = result * (amount.value / activeFromCurrency.currency) * activeToCurrency.currency;
    return result.toFixed(4) + ' ' +activeToCurrency.sign;
}