function checker(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return (Math.min.apply(null, arr) + Math.max.apply(null, arr)) > 1000 ? true : false;

};


console.log(checker([2, 3, 4, 1000]))