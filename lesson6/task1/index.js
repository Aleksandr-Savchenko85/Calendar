function getArrayBonds(array) {
    if (Array.isArray(array)) {
        return [array.length, array[0], array[array.length - 1]]
    } else {
        return null;
    }
};

//console.log(getArrayBonds([2, 9, 6, 8, 50, 63, 58]))
//console.log(getArrayBonds(2, 9, 6, 8, 50, 63, 58))
