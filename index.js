// Code your solution in this file
function findMatching(array,name){
  return array.filter(function(element){
    return element.toLowerCase()==name.toLowerCase();
  })
}
function fuzzyMatch(array,letters){
  return array.filter((element)=>element.startsWith(letters));
}

function matchName(array,name){
  return array.filter((element)=>element.name===name);
}
