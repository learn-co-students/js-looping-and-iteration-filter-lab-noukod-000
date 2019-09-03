// Code your solution in this file
const drivers = [
	{
	  name: 'Bobby',
	  hometown: 'Pittsburgh' },
	{
	  name: 'Sammy',
	  hometown: 'New York' } ,
	{
	  name: 'Sally',
	  hometown: 'Cleveland' },
	{
	  name: 'Annette',
	  hometown: 'Los Angeles' },
	{
	  name: 'Bobby',
	  hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name){
	const driver = drivers.filter( (driver) => driver.toLowerCase() == name.toLowerCase() )
	return driver
}


function fuzzyMatch(drivers, partialName){
	return drivers.filter( (driverName) => driverName.slice(0, partialName.length) === partialName )
}

function matchName(drivers, name){
	return drivers.filter( (driver) => driver.name === name );
}