const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const hideEle = document.querySelectorAll(".hide-ele");
const checkButton = document.querySelector("#check");
const errorMessage = document.querySelector("#message");
const notes = document.querySelectorAll(".no-of-notes");

const availNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];


for(let i=0; i< hideEle.length; i++){
    hideEle[i].style.display = "none";
}

function showEle(){
        for(let i=0; i< hideEle.length; i++){
            hideEle[i].style.display = "block";
        }   
}


billAmount.addEventListener("input", showEle)



const validateBill = ()=>{
    errorMessage.style.display = "none";

    if(cashGiven.value !== ""){
    
        if(billAmount.value > 0){
            if(Number(cashGiven.value) >= Number(billAmount.value)){
                const amountReturn = cashGiven.value - billAmount.value;
                calculateChange(amountReturn);
            } else {
                showMessage("Give cash greater than or equal to bill amount.")
            }
        } else {
            showMessage("The Bill amount should be greater than 0.");
        }
    } else {
        showMessage("Enter both the values!");
    }
}

function calculateChange (amountReturn){
    for(let i=0; i < availNotes.length ; i++){
        const numofNote = Math.trunc(amountReturn / availNotes[i]);
        amountReturn = amountReturn % availNotes[i];
        notes[i].innerText = numofNote;

    }

}

const showMessage = (msg)=>{
    errorMessage.style.display = "block"
    errorMessage.innerText = msg;
}

checkButton.addEventListener("click", validateBill)