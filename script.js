function firstNonRepeatedChar(str) {
 // Write your code here
	 const count = {};

  // Count frequency of each character
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  

  // If no non-repeated character found
  return null;
}
	
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
