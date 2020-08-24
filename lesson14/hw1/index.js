let memory = 0;

let add = number => {
    return memory += number;
}

let decrease = number => {
    return memory -= number;
}
let reset = () => {
    return memory = 0;
}
let getMemo = () => {
    return memory;
}
export {add, decrease, reset, getMemo}

console.log(add(10))
console.log(decrease(10))
console.log(reset(10))
console.log(getMemo(10))