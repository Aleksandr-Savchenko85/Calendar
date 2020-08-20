function uniqueCount(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return Array.from(new Set(arr))

};


console.log(uniqueCount([1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9, 9, 9, 10]))