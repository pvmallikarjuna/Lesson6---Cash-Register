const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const noOfNotes = document.querySelector(".no-of-notes");

const errMessage = document.querySelector("#error-message");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAmount() {
  hideMessage();

  if (billAmount.value > 0) {

    if (cashGiven.value > billAmount.value) { //Cash given is more than the bill
      const amtTobeReturned = cashGiven.value - billAmount.value;
      calculateChange(amtTobeReturned);
    } else {
      showMessage("Cash Given should be atleast equal to the bill amount");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function hideMessage() {
  errMessage.style.display = "none";
}

function showMessage(msg) {
  errMessage.style.display = "block";
  errMessage.innerText = msg;
}

function calculateChange(amtTobeReturned) {
  //Iterate over all the available notes
  for (let i = 0; i < availableNotes.length; i++) {
    //No of notes for a particular denomination
    const numberofNotes = Math.trunc(amtTobeReturned / availableNotes[i]);

    //Amount left after calculating the no of notes for a denomination
    amtTobeReturned = amtTobeReturned % availableNotes[i];

    //Update the no. of notes in table for current amount
    noOfNotes[i].innerText = numberofNotes;
  }
}
