const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const resetButton = document.querySelector("#reset-button");
const errorMsg = document.querySelector("#error-msg");
const changeTable = document.querySelectorAll(".notes");
const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];
for(var i=0;i<notesAvailable.length;i++){
    changeTable[i].innerText =0;
}
checkButton.addEventListener("click",validator);
resetButton.addEventListener("click",reset);
function reset(){
    for(var i=0;i<notesAvailable.length;i++){
        changeTable[i].innerText =0;
}
errorM();
billAmount.value='';
cashGiven.value='';


}
function validator() {

    errorM();
    

    if(billAmount.value&& cashGiven.value) {
        validateAndCalculate(billAmount.value, cashGiven.value)
    }
    else {
        errorMessage("The bill amount and cash given should be greater than zero")
    }
    
}

function validateAndCalculate(bill, cash) {
    
    
    if(bill > 0) {
        if(Number(cash) >= Number(bill) ){
            const change = cash - bill;
            calculateChange(change);

        } 
        else {
            errorMessage("The cash given should be greater than or equal to bill amount")
        }
    } 
    else{
        errorMessage("the bill amount and cash given should be greater than zero")
    }
    
}


function calculateChange(change) {
    
    for(var i=0; i < notesAvailable.length; i++) {
        const noOfNotes = Math.trunc(change/notesAvailable[i]);

        change = change % notesAvailable[i];

        changeTable[i].innerText = noOfNotes;
    }
}


function errorM() {
    errorMsg.style.display = "none";
}

function errorMessage(message) {
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}
