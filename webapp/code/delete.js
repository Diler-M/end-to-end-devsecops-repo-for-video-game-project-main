// Example vulnerable code
var userInput = "'; DROP TABLE users; --";
var query = "SELECT * FROM users WHERE username = '" + userInput + "';";
