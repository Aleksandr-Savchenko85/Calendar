function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let cloneArr = arr.slice(0)
    
    //let cloneArr = [...arr];
    return cloneArr;
}

console.log(cloneArr([2, 5, 8]))
