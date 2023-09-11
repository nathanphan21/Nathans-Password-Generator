// Assignment code here
function generatePassword() {
  var length = prompt ("Enter a number between 8 and 128 for your password length.")
  if (length < 8 || length > 128 || isNaN(length)){
  alert ("Please enter a NUMBER that is between 8 or 128. Your previous entry did not meet those requirements.")
  return;
  }

  // Declares variables with a confirm action which asks what type of characters the user would like to include
var lowerCase = confirm("Would you like to include lower case letters?")
var upperCase = confirm("Would you like to include upper case letters?")
var numbers = confirm ("Would you like to include numbers?")
var specialCharacters = confirm ("Would you like to include special characters?")

// Sets varaibles with given options
lowerCase = "abcdefghijklmnopqrstuvwxyz"
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numbers = "0123456789"
specialCharacters = "!@#$%^&*()_-+=<>?"

// Uses an if statement to make sure at least one criteria is included
if (!lowerCase && !upperCase && !numbers && !specialCharacters){
    alert ("You must select at least one criteria to include in your password")
}

// Declares a variable validPassword with boolean statements to add the certain criteria to the new password
var validPassword = "";

if (lowerCase){
    validPassword += lowerCase
}
if (upperCase) {
    validPassword += upperCase
}
if (numbers){
    validPassword += numbers
}

if (specialCharacters) {
    validPassword += specialCharacters
}

// Declares a variable newPassword and gives the equation to create that new password
var newPassword ="";
for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * validPassword.length);
    newPassword += validPassword.charAt(randomIndex);
}

return newPassword;
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
