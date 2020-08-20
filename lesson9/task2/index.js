const obj = {
    name: 'John Doe',
    age: 17,
    interest: 'football',
};
const obj1 = {}
    

function concatProps(obj) {
    const arr = [];

    for (let key in obj) {
        arr.push(obj[key])

     //console.log(obj[key]) 


    }
    return arr;


};


console.log(concatProps(obj));
console.log(concatProps(obj1));