// -------- CREATE VARIABLES
// -------------------------
// Target generate passcode button
var param1;
var param2;
var param3;
var param4;
paramsArray = [];

var genratePasswordBtn = document.querySelector(".gen-password-btn");

// Create uppercase array
var alphabetsListUp = [];
var i = 65;
var j = 91;
for(k = i; k < j; k++) {
    var lettersStrUp =String.fromCharCode(k);
    alphabetsListUp.push(lettersStrUp);
};

// Create lowercase array
var alphabetsListLow = [];
var i = 97;
var j = 123;
for(k = i; k < j; k++) {
    var lettersStrLow =String.fromCharCode(k);
    alphabetsListLow.push(lettersStrLow);
};

// Create numbers array
var numbersList = [];
for(var l = 0; l < 10; l++) {
    numbersList.push(l); 
};

// Create special characters array
var specialChars = "! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~";
var specialCharsList = specialChars.split(" ");
for(var m = 0; m < specialCharsList.length; m++) {
    
}
     


 // -------- CREATE FUNCTIONS
// -------------------------    

function generatePassword() {

    // have them choose a character length
    var passLength = prompt("Enter a password character length (must be between 8 and 128).");
    console.warn("Char length: " + passLength);

    // validate at a number between 8 and 128 was chosen before moving on to the character type is chosen
    // Handle errors (if press cancel with empty field)
    if (passLength === null) {
        return;
    }

    // Handle errors (if press okay with empty field)
    if (passLength < 8 || passLength > 128 || passLength === "" || isNaN(passLength)) {
        alert("Invalid input. Please enter a password character length between 8 and 128.");
        generatePassword();
    }

    // Handler
    if (passLength > 7 && passLength < 129) {
        alert("You chose: " + passLength + " characters");
        askCharType(passLength);
    }
    
    
    // create character type functions
    function askCharType(passLength) {
        // have them choose at least one character type
        alert("Choose at least one character type from: special characters, numerical characters, lowercase characters and uppercase characters.");

        // Count how many character types they are selecting
        var charTypeValidate = 0;

        var charSpecialType = confirm("Want special characters in your password?");

        var charNumType = confirm("Want numerical characters in your password?");

        var charLowType = confirm("Want lowercase characters in your password?");

        var charUpType = confirm("Want uppercase characters in your password?");

        if (charSpecialType === true) {
            charTypeValidate++;
            param1 = "special characters"
            paramsArray.push(param1);
        }
        if (charNumType === true) {
            charTypeValidate++;
            param2 = "numbers";
            paramsArray.push(param2);
        }
        if (charLowType === true) {
            charTypeValidate++;
            param3 = "lowercase letters";
            paramsArray.push(param3);
        }
        if (charUpType === true) {
            charTypeValidate++;
            param4 = "uppercase letters";
            paramsArray.push(param4);
        }

        //log the number of character types chosen
        console.log("Parameters chosen: " + charTypeValidate);
        console.warn("Parameters chosen: " + paramsArray.join(", "));

        // validate at least one character type was chosen before generating a password
        if (charTypeValidate >= 1) {
            alert("You chose: " + paramsArray.join(", "));
            alert("Let's generate a password!!!");
        }
        else {
            alert("Please select at least one character type.");
            askCharType();
        }

        // If all character types are chosen, then generate random password based on criteria
        var allParams = [];
        var insertElement = function(type) {
            for (i = 0; i < type.length; i++) {
                allParams.push(type[i]);
            }
        }

        if (charSpecialType) {
            insertElement(specialCharsList);
        }
        if (charNumType) {
            insertElement(numbersList);
        }
        if (charLowType) {
            insertElement(alphabetsListLow);
        }
        if (charUpType) {
            insertElement(alphabetsListUp);
        }
        console.log("Chosen parameters array: " + allParams);

        // Store respective character criteria arrays into one array
        var allParamsPw = [];
        console.log("Char length: " + passLength);
        for(var n = 0; n < passLength; n++) {
            allParamsPw.push(allParams[Math.floor(Math.random() * allParams.length)]);
        }

        // Display randomly generated password on page
        console.log("Generated password: " + allParamsPw);
        document.getElementById("passcode").value = allParamsPw.join("");
    }
    
}

// Copy password to clipboard
function copyToClipboard() {
    var copyText = document.getElementById("passcode");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}


























