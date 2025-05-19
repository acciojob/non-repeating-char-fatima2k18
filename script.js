function firstNonRepeatedChar(str) {
 // Write your code here
	  const count = {};

  // First pass: Count each character
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Second pass: Find the first non-repeated character
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character found
  return null;
}
	
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
