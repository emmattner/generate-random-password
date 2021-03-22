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

//might need to check numbers do we need 8 or 7 or 9
if (passwordLength >8 && passwordLength <128) {
  
}
else {
alert ("Password length not within parameters.")
}

passwordText = '';
for (let var1 = 0; var1 < passwordLength; var1++) {
//  const element = array[var1];
// select random character from finalPWD array and concat to the password text
// generate rand num betwwen 0 randPWD.length
  var randnum = 
  passwordText += randPWD[randNum]
  
} 

return passworodText;  
}

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

