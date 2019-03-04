// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driverMatch) {
    return driverMatch.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, letters) {
  let string = letters.length
  return drivers.filter(function(driverMatch) {
    return driverMatch.slice(0, string) === letters
  })
}

 function matchName(drivers, name) {
  return drivers.filter(function(driverMatch) {
    return driverMatch.name === name
  })
}
