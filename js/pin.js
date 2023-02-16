function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    // console.log("pin not 4 digit found", pin);
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

// generate Pin number in the input field
document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  //display pin

  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

//access the calculator buttons
document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
      if (number === "C") {
        typedNumberField.value = "";
      } else if (number === "<") {
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        typedNumberField.value = remainingDigits;
      }
    } else {
      const newTypedNumber = previousTypedNumber + number;
      typedNumberField.value = newTypedNumber;
    }
  });

// Verify match and show correct message by clicking submit button
document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;

  const typedNumberField = document.getElementById("typed-numbers");
  const typedNumbers = typedNumberField.value;

  const pinSuccessMessage = document.getElementById("pin-success");
  const pinUnsuccessMessage = document.getElementById("pin-unsuccess");

  if (currentPin === typedNumbers) {
    pinSuccessMessage.style.display = "block";
    pinUnsuccessMessage.style.display = "none";
  } else {
    pinUnsuccessMessage.style.display = "block";
    pinSuccessMessage.style.display = "none";
  }
});

const product = 5;
const price = "7";
const subTotal = product * price;
const tax = subTotal / 10;
const total = subTotal + tax;
