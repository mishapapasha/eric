var baseCurrency = 'USD';

//ci = currency information
var ciService = {};

var currencies = {
    'USD':  {
        'currency': 1,
        'sign':     '&dollar;'
    },
    'EUR':  {
        'currency': 0.844798,
        'sign':     '&euro;'
    },
    'GBP':  {
        'currency': 0.740774,
        'sign':     '&pound;'
    },
    'ILS':  {
        'currency': 3.60177,
        'sign':     '&#8362;'
    },
    'CAD':  {
        'currency': 1.28549,
        'sign':     'C&dollar;'
    },
    'AUD':  {
        'currency': 1.33617,
        'sign':     'A&dollar;'
    },
    'INR':  {
        'currency': 67.8283,
        'sign':     '&#x20B9;'
    },
    'SGD':  {
        'currency': 1.34248,
        'sign':     'S&dollar;'
    }
};

ciService.getAvailableCurrencies = function() {
    return Object.keys(currencies);
}
0
ciService.getCurrencyByKey = function(key) {
    return currencies[key];
}