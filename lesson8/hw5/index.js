let user ={
    name: "Tom",
    age: 25,
    height: 170,
}

let user1 = Object.assign(user);
let user2 = {...user}
let user3 = {}; 
for (const key in user) {
     {
        user3[key] = user[key]
    }
}
user1.number = 15
user2.hhh = 55
user3.ggg =100



console.log(user)
console.log(user1)
console.log(user2)
console.log(user3)