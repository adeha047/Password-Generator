
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function getRandom(arr) {
  var randomNumber = Math.floor(Math.randon() * arr.length);
  var characters = arr[randomNumber]

  password = password + characters;


}

//variable to store a function for to build the password

  function generatePassword() {
   
    // adding a new array to account for the pas
   var password = "";
   var passwordType = [];
   //accounts for all the possible characters in the password
   var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var special = ["!", "@", "#", "$", "%", "^", "&", "*"];
   var numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 

   var length = prompt("How many characters would you like your Password to be?");

   if (length < 8 || length > 128) {
     alert("Please enter a number between 8 and 128")
     return;

   }


   var lowercase = confirm("Do you want to use lowercase letters?");
   var uppercase = confirm("Do you want to use Upperrcase letters?");
   var numeric = confirm("Do you want to include numbers?");
   var specialCharacters = confirm("Do you want to include special characters?");

   if (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
     alert("Please use one of the requested fields.")
   }
   
   if (lowercase === true && uppercase === false && numeric === false && specialCharacters === false) {
     passwordType = passwordType.concat(lowerCase);

   }

   if (lowercase === false && uppercase === true && numeric === false && specialCharacters === false) {
    passwordType = passwordType.concat(upperCase);

   }

   if (lowercase === false && uppercase === false && numeric === true && specialCharacters === false) {
    passwordType = passwordType.concat(numeric);

   }

   if (lowercase === false && uppercase === false && numeric === true && specialCharacters === false) {
    passwordType = passwordType.concat(specialCharacters);

   }


   var passwords = length; 
   for (var i = 0; i < passwords; i++) {
     var randomNumber = Math.floor(Math.random() * passwordType.length); 
     var passwordOptions = passwordType [randomNumber];
     password = password + passwordOptions; 
   }

   return password;


  }

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);




