function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    //return arr.reverse(arr) => method that mutates the array;

    // non mutating method
    let newArr = [];
    for (let i = 1; i <= arr.length; i++) {
        newArr.push(arr[arr.length - i])
    }


    return newArr;


}


console.log(reverseArray([1, 2, 3, 4, 5]))