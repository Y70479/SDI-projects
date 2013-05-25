// alert("JavaScript works!");

// Andre Little
// SDI 1305
// Project 3
// Video Game Tournament

// Global Variables
var teamName = "Zwo";
    teamCaptain = "DaFightingRobot";
    teamSlayer = "TheColinies";
    teamSupport1 = "OhYeahCookies";
    teamSupport2 = "MrHuntinNoobs";
    consoleName = "Nintendo Wii U";
    gameName = "Call of Duty: Black Ops 2";
    mapCount = 5;
    mapsWePlay = [" Raid", " HiJacked", " Plaza", " Carrier", " StandOff"];
    minutesPerMap = [16, 10, 8, 8, 24];
    playTime = true;
    
// JSON Data
var myTeam = {
    "zwoMembers": [
        {"player": " DaFightingRobot",
         "position": "Captain"
        },
        {"player": " TheColinies",
         "position": "Slayer"
        },
        {"player": " OhYeahCookie",
         "position": "Support"
        },
        {"player": " MrHuntinNoobs",
         "position": "Support 2"
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
console.log ("Thanks to team " + teamName + " and their team " + myTeam.zwoMembers[0].position + myTeam.zwoMembers[0].player + " for a great game." );