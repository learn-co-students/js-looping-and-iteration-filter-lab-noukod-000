// Code your solution in this file
function findMatching(drivers, matcher){
    return drivers.filter(function(driver){ return driver.toUpperCase() === matcher.toUpperCase()});
  }
  
  function fuzzyMatch(drivers, matcher){
    return drivers.filter(function(driver){ return driver.toUpperCase().startsWith(matcher.toUpperCase())});
  }
  
  function matchName(drivers, matcher){
    return drivers.filter(function(driver){ return driver.name.toUpperCase().match(matcher.toUpperCase())});
  }