const repeatString = function(str, int) {
    if (int < 0) {
        return "ERROR";
    }
    let tempString = "";
    for (let i = 0; i < int; i++) {
        tempString = tempString + str;
    }
return tempString;
};

// Do not edit below this line
module.exports = repeatString;
