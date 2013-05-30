// alert("JavaScript works!");

// Andre Little
// SDI 1305
// project 4
// My Library

var myLibrary = function(){
    
    // 1.) Does a string follow a 123-456-7890 pattern like a phone number?
    var numCheck = function (number) {
        var total = number.length;
            dash = "-";
            bDash = dash.indexOf("-");
            eDash = dash.lastIndexOf("-");
            
            if (total === 12 && bDash === 3 && eDash === 7) {
                return true;
            } else {
                return false;
            }
    }; // End numCheck
    
    // 2.) Given a string version of a number such as "42", return the value as an actual Number, such as 42.
   var numValue = function (number) {
        return Number(number);
   
    }; // End numValue 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return {
        "numCheck": numCheck,
        "numValue": numValue
    }
    
    
} // End myLibrary


var myNewLibrary = new myLibrary();

console.log(myNewLibrary.numCheck("800-869-7787"));
console.log(myNewLibrary.numValue("15"));
