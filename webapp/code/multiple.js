// Example code with Command Injection vulnerability
var userInputCommand = "echo 'Vulnerable Code';";
var result = executeCommand(userInputCommand);

function executeCommand(command) {
    // Execute command without proper validation
    var exec = require('child_process').exec;
    exec(command, function(error, stdout, stderr) {
        console.log(stdout);
    });
}

// Example code with deprecated and bad practices
document.write("Hello, " + user.name); // Deprecated document.write

var password = "user123";
var hashedPassword = sha1(password); // Using SHA-1, which is now considered insecure

// Using synchronous XMLHttpRequest (considered bad practice)
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", false);
xhr.send();
console.log(xhr.responseText);

// Example code with Insecure Direct Object References
var userId = 123;
var userProfile = getUserProfile(userId);

function getUserProfile(userId) {
    // Fetch user profile based on userId without proper authorization check
    return database.query("SELECT * FROM user_profiles WHERE id = " + userId);
}
// Example code with multiple vulnerabilities
var userInput = "<img src=x onerror=alert('XSS');>";
document.write(userInput);

var insecurePassword = "user123";
var insecureHashedPassword = md5(insecurePassword);

var sqlInjectionInput = "'; DROP TABLE users; --";
var sqlInjectionQuery = "SELECT * FROM users WHERE username = '" + sqlInjectionInput + "';";
