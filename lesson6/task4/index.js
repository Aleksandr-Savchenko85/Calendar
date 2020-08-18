//EXAMPLE 1 (DESTRUCTURING ARR)
function swap(arr) {
    const [start, ...rest] = arr
    return [...rest,start];
    
 //EXAMPLE 2 (SLICE, PUSH)   
    //const newArr = arr.slice(1, arr.length);
    //newArr.push(arr[0])
    //return newArr;


};




console.log(swap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))