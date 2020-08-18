function getSpecialNumbers(m, n) {
    let sumArr = [];
    for (let i = m; i <= n; i++) {
        if (i % 3 === 0) {
            sumArr.push(i)

        }


    }
    return sumArr;



}
//console.log(getSpecialNumbers(1, 9))