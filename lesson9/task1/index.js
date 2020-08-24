let obj = {
    'Jon Doe': 19,
    'Tom': 17,
    'Bob': 18,
}

function getAdults(obj) {
    const arr = Object.entries(obj);
    const filterArr = arr
        .filter(user => user[1] >= 18);

        const userNames = filterArr.map(user => user[0])





    return userNames


};



console.log(getAdults(obj))
