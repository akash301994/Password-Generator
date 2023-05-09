// Assignment code here
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmopqrstuvwxyz";
var specialChars = "!@#$%^&*()_+-=[];',./?><|:`~}{";
var numbers = "1234567890";


//need function that will randomize characters
function randomizer(text, numbers = 1) {
  let randomString = "";

  for (let i = 0; i < numbers; i++) {
    randomString += text.charAt(Math.floor(Math.random() * text.length));
  }

  return randomString;
};


// making the function called generatePassword. 
function generatePassword() {
  console.log("hey you clicked the button");
  let includeChars = "";
  var passwordGenerated = "";


 // 1. prompt the user for the password criteria
 //-pass length 8-128
   //-lowercase, uppercase, numbers, special character

 includeNumbersChars = confirm ('Click "OK" to include numbers in your password OR click cancel to exclude');
 includeUpperCaseChars = confirm ('Click "OK" to include upper case letters in your password OR click cancel to exclude');
 includeLowerCaseChars = confirm ('Click "OK" to include lower case numbers in your password OR click cancel to exclude');
 includeSpecialChars = confirm ('Click "OK" to include special characters in your password OR click cancel to exclude');


 //prompting user for length of pass to meet user criteria
 let passwordLength = parseInt(
  prompt("How many characters would you like in your passord? Must be greater than 8 and less than 128!")
);
  
if (isNaN(passwordLength)|| passwordLength <8 || passwordLength >128) {
  alert ("Number entered does not meet value requirements");
  return "";
}



 // If characters are selected then they are run through the randomizer function that will randomize character outcomes
 if (includeNumbersChars ) {
  includeChars += numbers;
  passwordGenerated += randomizer(numbers);
}

if (includeUpperCaseChars ) {
  includeChars += upperCaseChars;
  passwordGenerated += randomizer(upperCaseChars);
} 

 if (includeLowerCaseChars) {
  includeChars += lowerCaseChars;
  passwordGenerated += randomizer(lowerCaseChars);
}

if (includeSpecialChars) {
  includeChars += specialChars;
  passwordGenerated += randomizer(specialChars);
}

passwordGenerated += randomizer(
  includeChars, passwordLength - passwordGenerated.length
);

passwordGenerated = randomizer(
  passwordGenerated, passwordGenerated.length);


// 4. display password. 

  return passwordGenerated;
};

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