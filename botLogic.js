// An array of possible responses
let button_1 = document.getElementById("option-1");
let button_2 = document.getElementById("option-2");
let button_3 = document.getElementById("option-3");
let aboutOption = button_1.addEventListener('click', function() {
  aboutQueries();
});
let repairOption = button_2.addEventListener('click', function() {
  repairQueries();
});
let queryOption = button_3.addEventListener('click', function() {
  selling_buyingQueries();
});
let chooseOne = document.getElementById("userChoices");

let whatTheyPick = chooseOne.addEventListener('click', function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();
});

let beginningOptions = firstOptions();

button_1.innerHTML = beginningOptions[0];
button_2.innerHTML = beginningOptions[1];
button_3.innerHTML = beginningOptions[2];



function firstOptions() {
  return [
    "About PhoneSpot", "Repairs", "Selling or buying a device"
  ]
}
function aboutQueries() {
  beginningOptions = ["Who Are We At PhoneSpot?", "Directions To Our Store", "Contact Us!"]
  button_1.innerHTML = beginningOptions[0];
  button_2.innerHTML = beginningOptions[1];
  button_3.innerHTML = beginningOptions[2];

}

function repairQueries() {
  beginningOptions = ["Repairs For Computers/Laptops", "Repairs For Mobile Devices", "Repairs For Other Devices"]
  button_1.innerHTML = beginningOptions[0];
  button_2.innerHTML = beginningOptions[1];
  button_3.innerHTML = beginningOptions[2];
}

function selling_buyingQueries() {
  beginningOptions = ["Can I Sell Devices To PhoneSpot?", "What Does PhoneSpot Sell?", "Go Back"]
  button_1.innerHTML = beginningOptions[0];
  button_2.innerHTML = beginningOptions[1];
  button_3.innerHTML = beginningOptions[2];
}

