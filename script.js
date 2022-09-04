const cards = document.getElementById("card");
const cardHolder = document.getElementById("card-holder-input")
const cardNumber = document.getElementById("card-number-input");
const cardMonth = document.getElementById("month-input");
const cardYear = document.getElementById("year-input");
const cvc = document.getElementById("cvc-input");
const cardHolderDisplay = document.getElementById("card-holder");
const cardNumberDisplay = document.getElementById("card-number");
const cardMonthDisplay = document.getElementById("month");
const cardYearDisplay = document.getElementById("year");
const cvcDisplay = document.getElementById("cvc")
const numberError = document.getElementById("number-error");
const dateError = document.getElementById("date-error");
const cvcError = document.getElementById("cvc-error");
const button = document.getElementById("btn");
const success = document.getElementById("success");
let error = 0;
let result = 0;

//display user input in real time
cardNumber.addEventListener("input", () => {
    cardNumberDisplay.textContent = cardNumber.value;
    result = cardNumber.value;
});

cardMonth.addEventListener("input", () => {
    cardMonthDisplay.textContent = cardMonth.value;
    
})

cardYear.addEventListener("input", () => {
    cardYearDisplay.textContent = cardYear.value;
})

cardHolder.addEventListener("input", () => {
    cardHolderDisplay.textContent = cardHolder.value;
})

cvc.addEventListener("input", () => {
    cvcDisplay.textContent = cvc.value;
})

//input validation
button.addEventListener("click", () => {
    if(isNaN(result) || result == 0){
        numberError.style.display = "inline";
        cardNumber.style.border = "1px solid red";
        error++

    } else{
        numberError.style.display = "none";
        cardNumber.style.border = "1px solid var(--Dark-grayish-violet)";
        error--
    }
    if(cardMonth.value == "" || cardYear.value == ""){
        dateError.style.display = "inline";
        cardMonth.style.border = "1px solid red";
        cardYear.style.border = "1px solid red";    
        error++    
    } else{
        dateError.style.display = "none";
        cardMonth.style.border = "1px solid var(--Dark-grayish-violet)";
        cardYear.style.border = "1px solid var(--Dark-grayish-violet)";
        error--
    }
    if(cvc.value == ""){
        cvcError.style.display = "inline";
        cvc.style.border = "1px solid red"
        error++
    }else{
        cvcError.style.display = "none";
        cvc.style.border = "1px solid var(--Dark-grayish-violet)";
        error--
    }

    if(error < 0){
       cards.style.display = "none";
       success.style.display = "flex";
        console.log(success)
    }
})
