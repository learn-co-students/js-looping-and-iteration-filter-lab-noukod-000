// Code your solution in this file
function findMatching(driverArray,val){
  const newArray = [];
  for(const el of driverArray){
    if (el.toUpperCase() === val.toUpperCase()) {newArray.push(el);}
    }
  return newArray;
}

function fuzzyMatch(driverArray,val){
    const newArray = [];
    for(const el of driverArray){
      if(el.slice(0,2) === val.slice(0,2)){
        newArray.push(el);
      }
    }
    return newArray;
}

function matchName(driverArray,val){
  const newArray = [];
  for(const el of driverArray){
    if(el.name === val){
      newArray.push(el);
    }
  }
  return newArray;
}
