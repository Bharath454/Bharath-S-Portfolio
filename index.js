var InputName = document.getElementById('InputName');
var InputValue = document.getElementById('InputValue');
var inputNumber = document.getElementById('InputNumber');
var holderNumber = document.getElementById('cardHolderNum');
var inputMonth = document.getElementById('inputMonth');
var MonthValue = document.getElementById('MonthValue');
var inputYear = document.getElementById('inputYear');
var yearValue = document.getElementById('yearValue');
var inputCvc = document.getElementById('inputCvc');
var valueCvc = document.getElementById('ValueCvc');

function handleInput(e) {
    var result = e.target.value.toUpperCase();
    InputName.textContent = result || "Card Holder";

    
}

InputValue.addEventListener('input', handleInput);

function handleNumber(e) {
    var show = e.target.value.replace(/\D/g, '');
    let convertedValue = show.replace(/(\d{4})/g, "$1 ").trim();

    if (show.length > 16) {
        show = show.slice(0, 16);
    }

    e.target.value = show;
    holderNumber.textContent = convertedValue || "0000 0000 0000 0000";

    if (show.length === 16) {
        inputMonth.focus();
    }
}

inputNumber.addEventListener('input', handleNumber);

function handleMonth(e) {
    var month = e.target.value.replace(/\D/g, '');

    if (month.length > 2) {
        month = month.slice(0, 2);
    }

    e.target.value = month;
    MonthValue.textContent = month || "MM";

    if (month.length === 2) {
        inputYear.focus(); 
    }
}

inputMonth.addEventListener('input', handleMonth);

function handleYear(e) {
    var year = e.target.value.replace(/\D/g, '');

    if (year.length > 2) {
        year = year.slice(0, 2);
    }

    e.target.value = year;
    yearValue.textContent = year || "YY";

    if (year.length === 2) {
        inputCvc.focus(); 
    }
}

inputYear.addEventListener('input', handleYear);

function handleCvc(e) {
    var cvc = e.target.value.replace(/\D/g, "");

    if (cvc.length > 3) {
        cvc = cvc.slice(0, 3);
    }

    e.target.value = cvc;
    valueCvc.textContent = cvc || "CVC";
}

inputCvc.addEventListener('input', handleCvc);

document.querySelector(".confirm").addEventListener("click", function () {
    var name = InputValue.value.trim();
    var number = inputNumber.value.replace(/\s/g, "");
    var month = inputMonth.value.trim();
    var year = inputYear.value.trim();
    var cvc = inputCvc.value.trim();

    if (name === "") {
        alert("Please enter the Cardholder Name.");
        return;
    }

    if (number.length !== 16 || isNaN(number)) {
        alert("Please enter a valid 16-digit Card Number.");
        return;
    }

    if (month === "" || isNaN(month) || month < 1 || month > 12) {
        alert("Please enter a valid Expiration Month (01-12).");
        return;
    }

    if (year.length !== 2 || isNaN(year)) {
        alert("Please enter a valid 2-digit Expiration Year.");
        return;
    }

    if (cvc.length !== 3 || isNaN(cvc)) {
        alert("Please enter a valid 3-digit CVC.");
        return;
    }
document.querySelector(".finish").style.display="block"
    
});
