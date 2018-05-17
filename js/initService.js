
var header, 
convertor, 
amount, 
fromCurrency, 
dropDownFrom, 
arrow,
toCurrency, 
dropDownTo;

function createConvertorHeader(header) {
    //create the header element
    header = document.createElement('header');
    header.id = "headerContainer"; 
    //create title element
    var titleElemnt = this.document.createElement('h2');
    var title = 'Welcome to my currency convertor';
    titleElemnt.id = "headerTitle";
    titleElemnt.innerHTML = title;
    //append title to header
    header.appendChild(titleElemnt);
    return header;
}

function createConvertorContainer(container) {
    //create the container for the convertor 
    container = this.document.createElement('div');
    container.id = "convertorInfo";
    return container;
}

function createaAmountContainer(container) {
    //create container for amount input
    container = document.createElement('div');
    container.id = "amountContainer";
    //create the input text for the amount
    amount = document.createElement('input');
    amount.type = "text";
    amount.id = "amount";
    //append the input element to the container
    container.appendChild(amount);
    return container;
}

function createFromContainer(container) {
    //create the from dropdown container
    var container = this.document.createElement('div');
    container.classList.add('dropdownContainer');
    //create list of the currencies for dropdown
    dropDownFrom = this.document.createElement('ul');
    currencyAPI.getAvailableCurrencies().forEach(function(currency){
        let cureencyElement = document.createElement('li');
        cureencyElement.addEventListener("click", function(){
            fromCurrency.innerHTML = currency;
            dropDownFrom.classList.toggle("show");
        });
        cureencyElement.classList.add('dropDownItem');
        cureencyElement.innerHTML = currency;
        dropDownFrom.appendChild(cureencyElement);
    });
    dropDownFrom.classList.add('dropdown-conent');
    //create button for from dropdown
    fromCurrency = document.createElement('button');
    fromCurrency.addEventListener("click", function(){
        dropDownFrom.classList.toggle("show");
    });
    fromCurrency.classList.add('dropBtn');
    fromCurrency.innerHTML = "FROM";
    //append the button and dropdown to container
    container.appendChild(fromCurrency);
    container.appendChild(dropDownFrom);
    return container;
}

function createArrow(arrow) {
    //create arrow element
    arrow = document.createElement('span');
    arrow.id = "arrow";
    arrow.innerHTML = '&#8631;';
    return arrow;
}

function createToContainer(container) {
    //create the to container
    container = this.document.createElement('div');
    container.classList.add('dropdownContainer');
    //create list of currencies for to dropdown
    dropDownTo = this.document.createElement('ul');
    currencyAPI.getAvailableCurrencies().forEach(function(currency){
        let cureencyElement = document.createElement('li');
        cureencyElement.addEventListener("click", function(){
            toCurrency.innerHTML = currency;
            dropDownTo.classList.toggle("show");
        });
        cureencyElement.classList.add('dropDownItem');
        cureencyElement.innerHTML = currency;
        dropDownTo.appendChild(cureencyElement);
    });
    dropDownTo.classList.add('dropdown-conent');
    //create button for to dropdown
    toCurrency = document.createElement('button');
    toCurrency.addEventListener("click", function(){
        dropDownTo.classList.toggle("show");
    });
    toCurrency.classList.add('dropBtn');
    toCurrency.innerHTML = "TO";
    //append the button and the dropdown list to container
    container.appendChild(toCurrency);
    container.appendChild(dropDownTo);
    return container;
}


window.onload = function() {
    var main = document.getElementById('mainContainer');

    //create header
    header = createConvertorHeader(header);

    //create convertor container 
    convertor = createConvertorContainer(convertor);

    //create amount input
    var amountContainer = createaAmountContainer(amountContainer);

    //create the from currency dropdown
    var fromContainer = createFromContainer(fromContainer);

    //create Arrow
    arrow = createArrow(arrow);

    //create the to currency dropdown
    var toContainer = createToContainer(toContainer);

    //Append element to the document
    //Main
    main.appendChild(header);
    main.appendChild(convertor);
    //Convertor
    convertor.appendChild(amountContainer);
    convertor.appendChild(fromContainer);
    convertor.appendChild(arrow);
    convertor.appendChild(toContainer);
}