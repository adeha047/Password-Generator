
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input when requested
function getRandom(arr) {
  var randomNumber = Math.floor(Math.randon() * arr.length);
  var characters = arr[randomNumber]

  password = password + characters;


}

//variable to store a function for to build the password

  function generatePassword() {
   
    // accounting for passwords
   var password = "";
   var passwordType = [];
   //accounts for all the possible characters in the password
   var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var special = ["!", "@", "#", "$", "%", "^", "&", "*"];
   var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   var allCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "^", "&", "*", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
   var specialNumbers = ["!", "@", "#", "$", "%", "^", "&", "*", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
   var lowUp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var lowUpSpecial = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "^", "&", "*"];
   var lowNumbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
   var highNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
   var lowCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","@", "#", "$", "%", "^", "&", "*"];
   var highCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","@", "#", "$", "%", "^", "&", "*"];
    
  
    // Accounts for the length of the variables selected
   var length = prompt("How many characters would you like your Password to be?");

   //Accounts for the length of the password
   if (length < 8 || length > 128) {
     //only options between 8 and 128 are available
     alert("Please enter a number between 8 and 128")
     return;

   }

   // Questions determining how the password should be formatted
   var lowercase = confirm("Do you want to use lowercase letters?");
   var uppercase = confirm("Do you want to use Upperrcase letters?");
   var numeric = confirm("Do you want to include numbers?");
   var specialCharacters = confirm("Do you want to include special characters?");
   
   // Must Choose at least one option
   if (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
     alert("Please use one of the requested fields.")
   }
   //For if only lowercase is selected 
   if (lowercase === true && uppercase === false && numeric === false && specialCharacters === false) {
     passwordType = passwordType.concat(lowerCase);

   }
   //for if only uppercase options are selected
   if (lowercase === false && uppercase === true && numeric === false && specialCharacters === false) {
    passwordType = passwordType.concat(upperCase);

   }
   // For if only numbers are selected 
   if (lowercase === false && uppercase === false && numeric === true && specialCharacters === false) {
    passwordType = passwordType.concat(numbers);

   }
   //For if only special characters are selected
   if (lowercase === false && uppercase === false && numeric === false && specialCharacters === true) {
    passwordType = passwordType.concat(special);

   }
   //For if all characters are selected
   if (lowercase === true && uppercase === true && numeric === true && specialCharacters === true) {
    passwordType = passwordType.concat(allCharacters); 

   }
   //For if numbers and special characters are selected.
   if (lowercase === false && uppercase === false && numeric === true && specialCharacters === true) {
    passwordType = passwordType.concat(specialNumbers); 

   }
   //For different variations that have been requested in the prompts 
   if (lowercase === true && uppercase === true && numeric === false && specialCharacters === false) {
    passwordType = passwordType.concat(lowUp); 

   }
   //For different variations that have been requested in the prompts 
   if (lowercase === true && uppercase === true && numeric === true && specialCharacters === false) {
    passwordType = passwordType.concat(lowUpSpecial); 

   }

   //For different variations that have been requested in the prompts 
    if (lowercase === true && uppercase === false && numeric === true && specialCharacters === false) {
      passwordType = passwordType.concat(lowNumbers); 
    }

    if (lowercase === false && uppercase === true && numeric === true && specialCharacters === false) {
      passwordType = passwordType.concat(highNumbers); 
    }

    if (lowercase === true && uppercase === false && numeric === false && specialCharacters === true) {
      passwordType = passwordType.concat(lowCharacters); 
    }

    if (lowercase === false && uppercase === true && numeric === false && specialCharacters === true) {
      passwordType = passwordType.concat(highCharacters); 
    }

   //For loop to determine the length and type of password
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




