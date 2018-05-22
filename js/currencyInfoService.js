var baseCurrency = 'USD';

//ci = currency information
var ciService = {};

var currencies = {
    'USD':  {
        'currency': 1,
        'sign':     ''
    },
    'EUR':  {
        'currency': 0.844798,
        'sign':     ''
    },
    'GBP':  {
        'currency': 0.740774,
        'sign':     ''
    },
    'ILS':  {
        'currency': 3.60177,
        'sign':     '&#8362;'
    },
    'CAD':  {
        'currency': 1.28549,
        'sign':     ''
    },
    'AUD':  {
        'currency': 1.33617,
        'sign':     ''
    },
    'INR':  {
        'currency': 67.8283,
        'sign':     ''
    },
    'SGD':  {
        'currency': 1.34248,
        'sign':     ''
    }
};

ciService.getAvailableCurrencies = function() {
    return Object.keys(currencies);
}
0
ciService.getCurrencyByKey = function(key) {
    return currencies[key];
}