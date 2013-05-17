// alert("JavaScript works!");

// Andre Little
// SDI 1305
// Project 2
// Hooby Upload


// Variables
var myName = "Andre Little";
var myHobby = "YouTube";
var ytContent = "Video game commentaries";
var finishing = ["doing thumbnail pictures", " creating Information for my video", " uploading my video", " messaging my subscribers"];
var minutesPerProcess = [15, 10, 30, 10];

// Outputs
console.log("Hi again, my name is " + myName + ".");
console.log("I have a hobby where I upload " + ytContent + " to " + myHobby + ".");

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

// String Function
console.log("My edit is done. Now it is time to record the Audio.");

var audioChoices = function(choiceOne, choiceTwo){
    var sony = (" is a more professional program to use, but is far more complicated and it crashes sometimes.");
    var adobe = (" is the easiest program to use out of the two.")
    return choiceOne + sony + " And " + choiceTwo + adobe;
};
var myChoice = audioChoices("Vegas Pro", "Audition");
console.log(myChoice);
console.log("If I want to save time I might want to think about this.");

// Array Function

console.log("Now that I have made my choice on which audio software I wanted to use, and recorded it time to add the finishing touches for this project");

var lastTouch = function(toDo, minutes){
    for (var toDoNumber = 0; toDoNumber < toDo.length; toDoNumber++){
        var actsDone = toDo;
        var actName = toDo[toDoNumber];
        var minutesPerAct = minutes[toDoNumber];
        console.log("Started " + actName + " for " + minutesPerAct + " minutes.");
        for (var min = 0; min < minutesPerAct; min+=5) {
            var minPassed = minutesPerAct - min;
            console.log(min + " minutes has passed by " + minPassed + " minutes to go.");
        }
            console.log("I am done " + actName + "."); 
    }       return actsDone;
    
};
var actsFinished = lastTouch(finishing, minutesPerProcess);
console.log("Yes, I am done " + actsFinished + ".");

console.log("Now I can rest until tomorrow, when it is time to do it all over again.");