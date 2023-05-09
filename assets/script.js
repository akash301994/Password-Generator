// Assignment code here
// making the function called generatePassword.
//just making a console log so i can keep track. /
function generatePassword() {
  console.log("hey you click the buttong you fat fuk!");



// 1. prompt the user for the password criteria
   //-pass length 8-128
   //-lowercase, uppercase, numbers, special characters
// 2. validate inputs.

  return "Generated Password appears here"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);