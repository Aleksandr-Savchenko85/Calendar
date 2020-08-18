

let getSum = (start, end) => {
     let sumEven = 0;
     for (let i = start; i <= end; i++) {
          if (i % 2 === 0) {
               sumEven += i
          }
     }
     return sumEven;
}



//console.log(getSum(2, 10))