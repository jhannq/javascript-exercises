const removeFromArray = function(array, ...numbersToRemove) {
    let resultArray =[];
    for (i=0; i< array.length; i++){
        if (numbersToRemove.includes(array[i])){
            continue;
        } else {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
