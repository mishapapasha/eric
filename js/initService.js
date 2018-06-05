
var header, 
convertor, 
amount, 
fromCurrency, 
dropDownFrom, 
arrow,
toCurrency, 
dropDownTo,
resultBtn,
result1,
result2;

function createConvertorHeader(header) {
    //create the header element
    header = document.createElement('header');
    header.id = "headerContainer"; 
    //create title element
    var titleElemnt = this.document.createElement('h2');
    var title = 'Welcome to my currency convertor';
    titleElemnt.id = "headerTitle";
    titleElemnt.innerHTML = title;
    styleService.setBackGroundColor(header, 'white')
    styleService.setBoarder(header, '4px', 'solid', 'slategray');
    styleService.setTextColor(titleElemnt, 'slategray');
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
    amount.placeholder = "amount";
    //append the input element to the container
    container.appendChild(amount);
    return container;
}

function createFromContainer(container) {
    //create the from dropdown container
    var container = document.createElement('div');
    container.classList.add('dropdownContainer');
    //create list of the currencies for dropdown
    dropDownFrom = document.createElement('ul');
    ciService.getAvailableCurrencies().forEach(function(currency){
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
        if(dropDownTo.classList.contains('show')){
            dropDownTo.classList.toggle('show');
        }
        dropDownFrom.classList.toggle("show");
    });
    fromCurrency.classList.add('dropBtn');
    fromCurrency.innerHTML = baseCurrency;
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
    container = document.createElement('div');
    container.classList.add('dropdownContainer');
    //create list of currencies for to dropdown
    dropDownTo = document.createElement('ul');
    ciService.getAvailableCurrencies().forEach(function(currency){
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
        if(dropDownFrom.classList.contains('show')){
            dropDownFrom.classList.toggle('show');
        }
        dropDownTo.classList.toggle("show");
    });
    toCurrency.classList.add('dropBtn');
    toCurrency.innerHTML = "EUR";
    //append the button and the dropdown list to container
    container.appendChild(toCurrency);
    container.appendChild(dropDownTo);
    return container;
}

function createResultContainer(container) {
    container = document.createElement('div');
    container.id = 'resultContainer';

    resultBtn = document.createElement('button');
    resultBtn.id = 'resultBtn';
    resultBtn.innerHTML = 'CONVERT';

    result1 = document.createElement('div');
    result1.classList.add('result');

    var ccs1Span = document.createElement('span');
    ccs1Span.classList.add('spanResult');
    ccs1Span.innerHTML = "RESULT-1";
    result1.appendChild(ccs1Span);

    result2 = document.createElement('div');
    result2.classList.add('result');

    var ccs2Span = document.createElement('span');
    ccs2Span.classList.add('spanResult');
    ccs2Span.innerHTML = "RESULT-2";
    result2.appendChild(ccs2Span);

    resultBtn.addEventListener("click", function(){
        ccs1Span.innerHTML = ccService1.convertAmount(amount, fromCurrency, toCurrency);
        ccs2Span.innerHTML = ccService2.convertAmount(amount, fromCurrency, toCurrency);
    });
    
    container.appendChild(resultBtn);
    container.appendChild(result1);
    container.appendChild(result2);
    return container;
}

window.onload = function() {
    var main = document.getElementById('mainContainer');
    styleService.setBackGroundColor(main, 'slategray');
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

    //create result section
    var resultContainer = createResultContainer(resultContainer);

    //Append element to the document
    //Main
    main.appendChild(header);
    main.appendChild(convertor);
    //Convertor
    convertor.appendChild(amountContainer);
    convertor.appendChild(fromContainer);
    convertor.appendChild(arrow);
    convertor.appendChild(toContainer);
    convertor.appendChild(resultContainer);
}