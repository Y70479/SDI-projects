// alert("JavaScript works!");

// Andre Little
// SDI 1305
// Project 3
// Video Game Tournament

// Variables
var teamName = "Zwo";
    teamCaptain = "DaFightingRobot";
    teamSlayer = "TheColinies";
    teamSupport1 = "OhYeahCookies";
    teamSupport2 = "MrHuntinNoobs";
    consoleName = "Nintendo Wii U";
    gameName = "Call of Duty: Black Ops 2";
    mapCount = 5;
    mapsWePlay = [" Raid", " HiJacked", " Plaza", " StandOff"];
    minutesPerMap = [16, 10, 8, 24];
    playTime = true;
    
// JSON Data
var myTeam = {
    "zwoMembers": [
        {"player": " DaFightingRobot",
         "position": " the Captain"
        },
        {"player": " Colinies",
         "position": " the Slayer"
        },
        {"player": " OhYeahCookie",
         "position": " the Support"
        },
        {"player": " MrHuntinNoobs",
         "position": " the Wingman"
        }
    ]
};


 // Procedure
 var practice = function(timeToPlay){
    if (timeToPlay < 4) {
        console.log("The number of hours we played today is " + timeToPlay + "." + "We can play for at least 2-3 more hours.");//code
    } else {
        console.log("We usually practice for " + timeToPlay + " hours a day, and then stop for the day.");
    }
 };
 
 // Boolean
 var gameMode = {
     flagCaps: function(rd1, rd2){
     if(rd1 + rd2 > 3){
         var gotBetter = true
         return gotBetter;
    } else {
         var practiceDone = false;
         return practiceDone
         }   
    }
 };

// Numbers
var teamDM = {
    kills: function(zwoKills){
        while (zwoKills < 7500) {
            console.log ("We have " + zwoKills + " pts right now, we need more.")
            zwoKills = zwoKills + 100;//code
        }
        return zwoKills;
    }
};

// string
var demo = {
    demoChoice: function(choice1, choice2){
    plant1 = (" bomb plant is upstairs and the hardest to get to.");
    plant2 = (" bomb plant is usually out in the open, but if not then its in a building in the basement.");
    return (choice1 + plant1 + " While, the " + choice2 + plant2);
    }
};
var ourChoice = demo.demoChoice('"A"', '"B"');
 
// Array

var almostDone = {
    lastTouch: function(toDo, minutes){
    for (var toDoNumber = 0; toDoNumber < toDo.length; toDoNumber++){
        var actsDone = toDo;
        var actName = toDo[toDoNumber];
        var minutesPerAct = minutes[toDoNumber];
        console.log("Started our match on the map " + actName + " for a total of " + minutesPerAct + " minutes.");
        for (var min = 0; min < minutesPerAct; min+=2) {
            var minPassed = minutesPerAct - min;
            console.log(min + " minutes has passed by " + minPassed + " minutes to go.");
        }
            console.log("The match time has passed on" + actName + "."); 
        }   return actsDone;
    
    }
};

// Method, Accessor, and Mutator
var timePlayedThisWeek = {
    
    "Monday": 4,
    "Tuesday": 4,
    "Thursday": 4,
    "Friday": 8,
    "Saturday": 2,
    "timePlayed": function(){
        var weekOneHours = this.Monday + this.Tuesday + this.Thursday + this.Friday + this.Saturday;
        var hoursToMinutes = weekOneHours * 60;
        return hoursToMinutes;
    },
    "morePractice": function(moreHours){
        this.Saturday = moreHours
    }
};



// Outputs
console.log ("Hello everyone, my name is " + teamCaptain + " and I am team Captain for team " + teamName + ".");
console.log ("Team " + teamName + " is a pro gaming team, that plays " + gameName + " on the " + consoleName + ".");
console.log ("I am going to let you all know how I run my team as the captain.")
practice(6);
console.log ("There are " + mapCount + " maps we play, but " + mapsWePlay[0] + " is the map we need more practice on.")
console.log (mapsWePlay[0] + " game mode is Capture the Flag. There are 2 rounds, with " + minutesPerMap[2] + " minutes per round.");
console.log ("The way Capture the Flag works is having more flag captures than the other team.");
console.log ("It is " + gameMode.flagCaps(3,1) + " That we are getting better at CTF.");
console.log ("After we got our game mode up in CTF, it's time to work on our Team Death Math routes on the map " + mapsWePlay[2] + "." );
console.log ("The way TDM works is the first team to 7500pts wins, with each kill worth 100pts");
console.log ("We have achieved " + teamDM.kills(0) + " pts. Now, on to the next mode.");
console.log ("When we are confident enough to move on, we do the game mode Demolition on the map " + mapsWePlay[1] + ".");
console.log ('Demolition is like SnD, but you have to get both the "A" and  "B" bombs planted in order to win.');
console.log (ourChoice);
console.log ("Now, we have our strategies down for all most all game modes, we rest until tomorrow, where we will resume on the map  " + mapsWePlay[0] + ".")
console.log ("Lets recap the game modes and the time we spent on them.");
console.log("We have practiced on" + almostDone.lastTouch(mapsWePlay, minutesPerMap) + ".");
console.log ("Thanks to my team, team " + teamName + " and " + myTeam.zwoMembers[1].player + myTeam.zwoMembers[1].position + " for becoming MVP for the week." );
console.log ("We practiced on Monday for " + timePlayedThisWeek.Monday + " hours.");
console.log ("We practiced on Tuesday for " + timePlayedThisWeek.Tuesday + " hours.");
console.log ("We practiced on Thursday for " + timePlayedThisWeek.Thursday + " hours.");
console.log ("We practiced on Friday for " + timePlayedThisWeek.Friday + " hours.");
console.log ("We practiced on Saturday for " + timePlayedThisWeek.Saturday + " hours.");
console.log ("That is a total of " + timePlayedThisWeek.timePlayed() + " minutes.");
console.log ("2 hours is not enough time for practice on Saturday, lets add 1 more hour.");
timePlayedThisWeek.morePractice(3);
console.log ("The new number of minutes we spent practicing is " + timePlayedThisWeek.timePlayed() + ".");
console.log ("Now we are really ready for this Tournament.");