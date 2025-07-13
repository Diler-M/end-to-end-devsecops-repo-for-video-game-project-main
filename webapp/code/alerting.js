// Example vulnerable code
var userInput = "<script>alert('XSS attack!');</script>";
document.write(userInput);
