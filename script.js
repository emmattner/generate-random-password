function generatePassword() {
  var passwordLength = window.prompt ("Please enter your password length");
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split('');
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var numbers = "0123456789".split('');
  var specialCharacters = "-/,.><@#$%^&*()={}[]`~".split('');
  var finalPWD = [];


if (window.confirm ("Would you like lowercase letters?")) {
  finalPWD = finalPWD.concat(lowercaseLetters);
  
}

if (window.confirm ("Would you like uppercase letters?")) {
  finalPWD = finalPWD.concat(uppercaseLetters);
  
}

if (window.confirm ("Would you like numbers?")) {
  finalPWD = finalPWD.concat(numbers);
  
}

if (window.confirm ("Would you like special characters?")) {
  finalPWD = finalPWD.concat(specialCharacters);
  
}


if (passwordLength >8 && passwordLength <128) {
  
}
else {
alert ("Password length not within parameters.")
}

passwordText = '';
for (let var1 = 0; var1 < passwordLength; var1++) {
  var randNum = Math.floor(Math.random() * finalPWD.length);
  passwordText += finalPWD[randNum]
  
} 

return passwordText;  
}

var generateBtn = document.querySelector("#generate");
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

