// Code your solution in this file
function findMatching(drivers, driverName) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === driverName.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    return driver[0,1] === string[0,1];
  });
}

function matchName(drivers, name) {
  const driversName = drivers.filter(
      function(driver) {
          return driver.name === name;
      }
  )
  return driversName;
}
