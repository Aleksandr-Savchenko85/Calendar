function findDivCount(a, b, n) {
      let quantity = 0;
      for (let i = a; i <= b; i++) {
            if (i % n ===0 ) {
                  quantity ++
            }


      }
      return quantity;

}


console.log(findDivCount(1, 10, 2))