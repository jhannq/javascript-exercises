const findTheOldest = function(arr) {
    let oldest = 0;
    let oldestIndex = 0;
    for (let i = 0; i<arr.length; i++){
        // check if person has yearOfDeath
        // if not add current year 
        if (!('yearOfDeath' in arr[i])){
            arr[i].yearOfDeath = 2023;
        }
        // get years lived
        // if years lived bigger than max
        // max = years lived
        if ((arr[i].yearOfDeath - arr[i].yearOfBirth) > oldest){
            oldest = arr[i].yearOfDeath - arr[i].yearOfBirth;
            oldestIndex = i;
        }
    }
    return arr[oldestIndex].name;
};

// Do not edit below this line
module.exports = findTheOldest;
