var values = {
    "aliases": [
        "Greyhame",
        "Stormcrow",
        "Mithrandir",
        "Gandalf the Grey",
        "Gandalf the White"
    ],
}



// create character length functions
function askCharLength() {
    // have them choose a character length
    var lengthAnswer = prompt("Choose password length (must be between 8 and 128 characters)");
    var passLength = parseInt(lengthAnswer);

    // validate at a number between 8 and 128 was chosen before moving on to the character type is chosen
    if (passLength > 7 && passLength < 129) {
        askCharType();
    }
    else {
        alert("Please select a character length between 8 and 128.");
        askCharLength();
    };
}



// create character type functions
function askCharType() {
    // have them choose at least one character type
    alert("Choose at least one character type from: Speical Characters, Numerical Characters, Lowercase Characters and Uppercase characters");

    // Count how many character types they are selecting
    var charTypeValidate = 0;

    var charSpecialType = confirm("Want special characters in your password?");

    var charNumType = confirm("Want numerical characters in your password?");

    var charLowType = confirm("Want lowercase characters in your password?");

    var charUpType = confirm("Want uppercase characters in your password?");

    if ((charSpecialType === true) || (charNumType === true) || (charLowType === true) || (charLowType === true)) {
        charTypeValidate++;
    };

    //log the number of character types chosen
    console.log(charTypeValidate);

    // validate at least one character type was chosen before generating a password
    if (charTypeValidate >= 1) {
        alert("Let's generate a password!!");
    }
    else {
        alert("Please select at least one character type.");
        askCharType();
    };
}



// run character length function
askCharLength();


















