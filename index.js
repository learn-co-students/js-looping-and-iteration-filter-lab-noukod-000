
function findMatching(drivers, fullname){
    return drivers.filter(driver => driver.toLowerCase() === fullname.toLowerCase());
}

function fuzzyMatch(drivers, chars) {
 return drivers.filter(function (driver){return driver.slice(0, chars.length) == chars});
}
function matchName(drivers, word){
  return drivers.filter(function (driver){return driver["name"].match(word)});
}
