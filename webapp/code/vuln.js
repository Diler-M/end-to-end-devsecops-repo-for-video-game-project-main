function insecureRandom() {
    return Math.random(); // This is not suitable for cryptographic purposes
}

function generateToken() {
    return insecureRandom().toString(36).substr(2); // Generate a random alphanumeric token
}

console.log("Insecure Token: " + generateToken());
