function increaseEvenEl(arr, delta) {
    newArr = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.map((el) => el % 2 == 0 ? el + delta : el)


}




console.log(increaseEvenEl([1, 2, 3, 4, 5, 6, 7], 20))