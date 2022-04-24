// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(){
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(){
    return drivers.slice(-2)
}

let selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers[0];

function createFareMultiplier(fareMultiplier){
    return function(fareQuintupler){
        return fareMultiplier*fareMultiplier;
    
    }
}

function fareDoubler(fare){
    return fare*2
}
 function fareTripler(fares){
     return fares*3
 }

function selectDifferentDrivers(drivers, arrDrivers){
    return arrDrivers(drivers)

}

