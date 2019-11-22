// -------- Create variables
// -------------------------
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
var specialChars = " ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~";
var specialCharsList = specialChars.split(" ");
for(var m = 0; m < specialCharsList.length; m++) {
    
}
        
 // -------- Create functions
// -------------------------       
// create character length functions
function askCharLength() {
    // have them choose a character length
    var lengthAnswer = prompt("Choose password length (must be between 8 and 128 characters)");
    var passLength = parseInt(lengthAnswer);
    console.warn(lengthAnswer, passLength);

    // validate at a number between 8 and 128 was chosen before moving on to the character type is chosen
    if (passLength > 7 && passLength < 129) {
        alert("You chose: " + passLength + " characters");
        askCharType(passLength);
    }
    else {
        alert("Please select a character length between 8 and 128.");
        askCharLength();
    }
}


// create character type functions
function askCharType(passLength) {
    // have them choose at least one character type
    alert("Choose at least one character type from: Special Characters, Numerical Characters, Lowercase Characters and Uppercase characters");

    // Count how many character types they are selecting
    var charTypeValidate = 0;

    var charSpecialType = confirm("Want special characters in your password?");

    var charNumType = confirm("Want numerical characters in your password?");

    var charLowType = confirm("Want lowercase characters in your password?");

    var charUpType = confirm("Want uppercase characters in your password?");

    if (charSpecialType === true) {
        charTypeValidate++;
    }
    if (charNumType === true) {
        charTypeValidate++;
    }
    if (charLowType === true) {
        charTypeValidate++;
    }
    if (charUpType === true) {
        charTypeValidate++;
    }

    //log the number of character types chosen
    console.log(charTypeValidate);

    // validate at least one character type was chosen before generating a password
    if (charTypeValidate >= 1) {
        alert("Let's generate a password!!");
    }
    else {
        alert("Please select at least one character type.");
        askCharType();
    }
    
    // If all character types are chosen...
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
    console.log(allParams);

    var allParamsPw = [];
    console.log(passLength);
    for(var n = 0; n < passLength; n++) {
        allParamsPw.push(allParams[Math.floor(Math.random() * allParams.length)]);
    }

    console.log("All params: " + allParamsPw);
}






// -------- Run Application
// -------------------------

// run character length function
askCharLength();


















