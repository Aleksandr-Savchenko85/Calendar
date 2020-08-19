function sortAsc(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    return array.sort((a, b) => a - b)
}

function sortDesc(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    return array.sort((a, b) => b - a)
}



console.log(sortAsc([2, 1, 4, 5, 3]))
console.log(sortDesc([2, 1, 4, 5, 3]))