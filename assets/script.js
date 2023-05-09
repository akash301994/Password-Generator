// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmopqrstuvwxyz";
var specialChars = "!@#$%^&*()_+-=[];',./?><|:`~}{";
var numbers = "1234567890";


// making the function called generatePassword.
//just making a console log so i can keep track. /
function generatePassword() {
  console.log("hey you click the button");

  //pseudo code
 // 1. prompt the user for the password criteria
 //-pass length 8-128
   //-lowercase, uppercase, numbers, special character

 includeNumberChars = confirm ('click ok to incude numbers in your password');
 includeUpperCaseChars = confirm ('click ok to incude upper case letters in your password');
 includeLowerCaseChars = confirm ('click ok to incude lower case numbers in your password');
 includeSpecialChars = confirm ('click ok to incude special characters in your password');

//need function that will randomize characters





let passwordLength = parseInt(
  prompt("How many characters would you like in your passord? Must be greater than 8 and less than 128!")
);
  
if (isNaN(passwordLength)|| passwordLength <8 || passwordLength >128) {
  alert ("Number entered does not meet value requirements");
  return "";
}





// 3. Generate password based on criteria
// 4. display passoword. 

  return password;
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