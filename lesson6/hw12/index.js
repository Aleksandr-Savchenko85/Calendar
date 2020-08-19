function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    //EXAMPLE 1
    //return [...new Set(arr)];

    //EXAMPLE 2
    //return arr.filter((el, index) => arr.indexOf(el) === index);

    //EXAMPLE 3
    return arr.reduce((unique, el) => unique.includes(el) ? unique : [...unique, el], [])




};



console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]))