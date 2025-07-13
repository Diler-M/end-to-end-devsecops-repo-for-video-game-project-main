// Example vulnerable code
var userInput = "console.log('Evil code executed!')";
eval(userInput); // Executing arbitrary code provided by the user
