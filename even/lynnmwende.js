// lynnmwende.js
// Function to check if a number is even
// Returns true if the number is even, false otherwise

function isEven(num) {
    // Use modulo operator to check divisibility by 2
    return num % 2 === 0;
}

// Test cases
console.log(isEven(108));    // Expected output: true
console.log(isEven(57));    // Expected output: false
console.log(isEven(-38));   // Expected output: true
