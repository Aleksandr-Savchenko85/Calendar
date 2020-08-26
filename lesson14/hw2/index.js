const user = {
    firstName: "Jhon",
    lastName: "Conor",
    age: 40,
    getFullName(){
        console.log(`My name is ${this.firstName} ${this.lastName} I am ${this.age} old `)
    },
};

//user.getFullName();


const func = user.getFullName;

func.call({firstName: "Sara", lastName: 'Conor', age: 58});
func.apply({firstName: "Sara", lastName: 'Conor', age: 58});
