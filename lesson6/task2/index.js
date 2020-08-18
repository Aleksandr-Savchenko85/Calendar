function getSum(arr) {
    let sumArr = 0;
    if (!Array.isArray(arr)) {
        return null
    }

    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i]

    }
    return sumArr;
}
console.log(getSum([1, 2, 3, 4, 5]))