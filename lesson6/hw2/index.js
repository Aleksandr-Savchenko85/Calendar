function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    return arr.map((el) => {
        return Math.pow(el, 2)
    })



}

//console.log(squareArray([4, 5]))
