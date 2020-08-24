const rooms = {
    matimatics_class: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },

    ],
    physics_class: [
        { name: 'room2 name1' },


    ],
    astronomy_class: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },
        { name: 'room3 name4' },

    ],
    english_class: [
        { name: 'room4 name1' },
        { name: 'room4 name2' },


    ],

}

//input: obj;
//output arr;

function getPeople(obj) {
    let result = Object.values(obj).flat().map(obj => obj.name)

    return result;
};


//let arr = [1, 2, 3,[4, 5, 6], [7], [8, 9, 10], 11];
 //let arr1 = arr.flat()


console.log(getPeople(rooms))
//console.log(arr)
//console.log(arr1)