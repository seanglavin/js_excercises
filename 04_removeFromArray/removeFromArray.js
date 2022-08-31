const removeFromArray = function(array,...toRemove) {
    let toRemoveArray = Array.from(toRemove);
    return filteredArray = array.filter(i => !toRemoveArray.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
