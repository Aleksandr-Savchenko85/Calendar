function increaseEvenEl(arr, delta) {

    if (!Array.isArray(arr)) {
        return null;
    };
    
    return arr.map((el) => el % 2 == 0 ? el + delta : el)


}




console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20))