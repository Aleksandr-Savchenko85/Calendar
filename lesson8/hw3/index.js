const user = {
    name: 'Tom',
    age: 17,
    iterest: 'foot'
  };

function getKeys(obj){
    const arr = Object.keys(obj)
    return (arr.forEach((elem) =>console.log(elem)))
}


console.log(user)
console.log(getKeys(user))