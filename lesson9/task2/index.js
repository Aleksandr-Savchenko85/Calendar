let users = {
    'Jon Doe': 19,
    'Tom': 18,
    'Ann': 25,
    'Jhon': 18,
    'Tad': 21,
    'Jessy': 35,
    'Jacob': 18,
    'Sam': 23,
    'Iren': 40,
};

function sortUsers(obj) {
    let arr = Object.entries(obj);
    let arr1 = arr.filter(user => user[1] >=20);
    let arr2 = arr1.map(user => user[0])



    return arr2;
}





console.log(sortUsers(users))
