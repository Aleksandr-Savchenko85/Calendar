function tranformToObject(arr) {
    let obj = {};
    arr.forEach(el => {
        obj[el] = el;
    });

    return obj;

}


console.log(tranformToObject(['a', 17.1, "John Doe"]))
console.log(tranformToObject([]))