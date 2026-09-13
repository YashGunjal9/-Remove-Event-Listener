// Name function for alert

function showAlert() {
  console.log("Hello");
}

// Getting button element

const alertButtonEl = document.getElementById("alertButton");

// Add addEventListener to the element

alertButtonEl.addEventListener("click", showAlert);

// Name function for removing alert 

function removeAlert() {
  alertButtonEl.removeEventListener("click", showAlert);
}

// Getting the button element

const removeButtonEl = document.getElementById("removeButton");

// Add addEventListener to the element

removeButtonEl.addEventListener("click", removeAlert);