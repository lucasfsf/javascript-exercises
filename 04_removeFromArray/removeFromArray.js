const removeFromArray = function(array, ...removeValues) {
    let indexOfValue;
    for (let i = 0; i < removeValues.length; i++) {
        indexOfValue = array.indexOf(removeValues[i]);
        // skips loop iteration for non present values
        if (indexOfValue === -1) {
            continue;
        }
        array.splice(indexOfValue, 1); //removes one value starting on the index
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
