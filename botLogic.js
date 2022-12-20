// An array of possible responses


let beginningOptions = userMenuOptions();
let button_1 = document.getElementById("option-1");
let button_2 = document.getElementById("option-2");
let button_3 = document.getElementById("option-3");
button_1.innerHTML = beginningOptions[0];
button_2.innerHTML = beginningOptions[1];
button_3.innerHTML = beginningOptions[2];
function userMenuOptions() {

  return [
    "About PhoneSpot",
    "Repairs",
    "Selling or buying a device"
  ];
}

var chooseOne = document.getElementById("userChoices");
var choseAnOption = document.getElementById("")
let whatTheyPick = chooseOne.addEventListener('click', function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();
});





function aboutQueries() {
  console.log("You chose about");
}
function repairQueries() {
  console.log("You chose repairs");
}
function selling_buyingQueries() {
  console.log("You chose selling or buying");
}

button_1.addEventListener('click', function() {
  aboutQueries();
});
button_2.addEventListener('click', function() {
  repairQueries();
});
button_3.addEventListener('click', function() {
  selling_buyingQueries();
});

// // A function to handle the form submission and display the chatbot's response
// function handleFormSubmit(event) {
//   event.preventDefault(); // prevent the form from reloading the page

//   // Get the user's message from the form input
//   const message = document.getElementById("option-1").value;

//   // // Use a random response from the responses array
//   // const response = responses[Math.floor(Math.random() * responses.length)];

//   // Display the chatbot's response
//   const chatbox = document.getElementById("chatbox");
//   chatbox.innerHTML += `<p><strong>Myron The Helper Bot:</strong> ${response}</p>`;
// }

// function answeringOptions(event) {
//   event.preventDefault();
//   button_1.innerHTML = beginningOptions[0];
//   button_2.innerHTML = beginningOptions[1];
//   button_3.innerHTML = beginningOptions[2];
//   console.log(button_1);
// }
// Add an event listener to the form to handle form submissions
const form = document.getElementById("chat-form");
//form.addEventListener("submit", passingOptions);

