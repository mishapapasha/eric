var baseCurrency = 'USD';

var currencyAPI = {};

var currencies = {
    'USD':  1,
    'EUR':  0.844798,
    'GBP':  0.740774,
    'ILS':  3.60177,
    'CAD':  1.28549,
    'AUD':  1.33617,
    'INR':  67.8283,
    'SGD':  1.34248
};

currencyAPI.getAvailableCurrencies = function() {
    return Object.keys(currencies);
}