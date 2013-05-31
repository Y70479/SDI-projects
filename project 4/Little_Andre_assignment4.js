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
            
            if (total === 12 || bDash === 3 || eDash === 7) {
                return true;
            } else {
                return false;
            }
    }; // End numCheck
    
    // 2.) Given a string version of a number such as "42", return the value as an actual Number, such as 42.
   var numValue = function (myNumber) {
        return Number(myNumber);
   
    }; // End numValue 
    
    // 3.) Format a number to use a specific number of decimal places, as for money: 2.1 -> 2.10
    var decimal = function (pi, afterDeci) {
        return Number(pi.toFixed(afterDeci));
    
    }; // End Decimal
    
    // 4.) Is the string a URL (Does it start with http:// or https://)?
    var urlCheck = function (u1, u2) {
        var address = "www.fullsail.edu";
        if (u1 === "http://" + address) {
            return true;
        } if (u2 === " https://" + address) {
            return true;
        } else {
            return false;
        }
        
    }; // End urlCheck
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return {
        "numCheck": numCheck,
        "numValue": numValue,
        "decimal": decimal,
        "urlCheck": urlCheck
    }
    
    
} // End myLibrary


var myNewLibrary = new myLibrary();

console.log(myNewLibrary.numCheck("800-869-7787"));
console.log(myNewLibrary.numValue("15"));
console.log(myNewLibrary.decimal(3.14159265359, 2));
console.log(myNewLibrary.urlCheck("http://www.fullsail.edu"));