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

// Boolean Function
console.log("Yes, I got some good gameplay earlier than expected, now I can eat something before I start editing.");

var snacks = function(aSandWich, bagsOfChips, cupsOfKoolaid){
    if (aSandWich + bagsOfChips + cupsOfKoolaid >= 5){
        var notHungry = true;
        return notHungry    
    } else {
        var stillHungry = false;
        return stillHungry
    }  
};
mySnacks = snacks(2,1,2);
console.log("I am stuffed from my sandwich, chips, and koolaid. That we know is  " + mySnacks + ". Now, I can get back to making " + myHobby + " videos.");

// Number Function
console.log("Now that I am full and have a great gameplay, its time for me to edit the gameplay.");

var editMode = function(timeToEdit){
    while (timeToEdit > 0) {
        console.log("I have " + timeToEdit + " minutes left to edit this video.");
        timeToEdit = timeToEdit - 1;
    }
    return timeToEdit;
};
var editFinished = editMode(120);
console.log("Dang, I have " + editFinished + " minutes left to edit this video, time to commentate over it.");
