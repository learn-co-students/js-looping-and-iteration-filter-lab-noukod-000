// Code your solution in this file
function findMatching(array, string) {
    return array.filter(function(driverName) {
        return string.toLowerCase() === driverName.toLowerCase() 
    });
}

function fuzzyMatch(array, string) {
    let length = string.length 
    return array.filter(function(driverName) {
        return driverName.slice(0, length) === string 
    });
}

function matchName(array, string) {
    return array.filter(function(driverName) {
        return driverName.name === string 
    });
}