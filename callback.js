//? callback function

// function greetings(person) {
//   console.log(person);
// }

// const name = "Jalal uddin";

//!handler function
function greeting(greetingHandler, name) {
  greetingHandler(name);
}

//? greetings message
function greetingHandler(name) {
  console.log("Good Morning", name);
}
greeting(greetingHandler, "Tom hanks");
