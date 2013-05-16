// alert("JavaScript works!");

// Andre Little
// SDI 1305
// Project 2
// Hooby Upload


// Variables
var myName = "Andre Little";
var myHobby = "YouTube";
var ytContent = "Video game commentaries";
var process = ["Get game-play", " edit game-play", " commentate over gameplay", " make a thumbnail"];
var minutesPerProcess = [120, 30, 15, 20];
var nintendoConsoles = 4;
var timeOfUpload = 60;
var uploadComplete = true;

console.log("Hi again, my name is " + myName + ".");
console.log("I have a hobby where I upload " + ytContent + " to " + myHobby + ".");
console.log("There is a certain order I go in when I upload " + process + ".");

// Procedure
var workHours = function (timeToPlay){
    if (timeToPlay > 1) {
        console.log("Ok, I have " + timeToPlay + " hours to play before I have to start editing.");
        } else {
            console.log("There is not enough time to get everything done in time.");
        }
};
workHours(2);