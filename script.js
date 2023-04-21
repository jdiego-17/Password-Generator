// Assignment Code
var generateBtn = document.querySelector("#generate");
// Create variables for numbers, symbols, and letters
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbolsChars = ["!", "#", "@", "%", "&", "$"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Change letters from lowercase to uppercase
var upper = alphabet.map(function(x){return x.toUpperCase();})


// function to generate the password
function generatePassword(){
  pass = "";
  // Create variables Prompts for length of characters, numbers, symbols, uppercase and lowercase
  var numChoice; 
  var lowerCase;
  var upperCase; 
  var numChar; 
  var symbolChar; 
// variable for picking the criteria of the prompts
  var pickCharacters;
  // Prompt for password length and rest of the prompts
  numChoice = prompt("Choose length of password. choose between 8 and 128 characters");
  if (!numChoice){
    alert("please insert a value")
    //if statement for the length of the password
  } else if (numChoice < 8 || numChoice > 128){
    numChoice = prompt("Please choose a number betwwen 8 and 128");
  } else {
    // Rest of the confirmed prompts
    lowerCase = confirm("will the password include lowercase letters?");
    upperCase = confirm("will the password include uppercase letters?");
    numChar = confirm("would you like to include numbers?");
    symbolChar = confirm("would you like to include special characters?");
  };
//if statement for slecting yes to all prompts in order togenerate a password
  if (lowerCase && upperCase && numChar && symbolChar) {
    pickCharacters = symbolsChars.concat(upper, alphabet, numbers);
    //else if statemnet when lowercase, numbers, and symbols criteria are selected
  } else if (numChar && symbolChar && upperCase) {
    pickCharacters = upper.concat(numbers, symbolsChars);
    console.log(pickCharacters);
  } else if(lowerCase && symbolsChars && upperCase){
    pickCharacters = alphabet.concat(symbolsChars, upper);
  } else if (lowerCase && numChar && upperCase){
    pickCharacters = alphabet.concat(numbers, upper);
  }; 
  
  // For loop to generate a random password 
  for (i = 0; i < numChoice; i++){
    var randomPassword = pickCharacters[Math.floor(Math.random() * pickCharacters.length)];
    pass += (randomPassword, randomPassword)
    console.log(randomPassword);
  } 
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);