// TODO: Enable strict mode
"use strict";

// TODO: Fix the following parameter list
function parseToJSON(data) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON
try{
  return JSON.parse(data); 
  //JavaScript Object Notation
} catch (error) {
  // TODO: if an exception is raised
  // print the error to the console
  // and return null
  console.error(error); 
  return null; 
}
}

let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });
//stringify converts an object into a string; 
console.log(parseToJSON(failData));

console.log(parseToJSON(passData));


//parsing in computer science is: analyze (a string or text) into logical syntactic components, typically in order to test conformability to a logical grammar.
