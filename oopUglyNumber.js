'use strict'

class UglyNumber {

  maxDivides(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly) {
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    if(numberUgly === 1) {
      return true;
    } else {
      return false;
    }
  }

  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
      }
    }
    return i;
  }

  getUglyArray(angka) {
    let arr = [];

    for(let i = 1 ; i < angka ; i++) {
      arr.push(this.getUglyNo(i))
    }
    return arr;
  }
}

let obj = new UglyNumber()

//driver code
console.log(obj.getUglyNo(150)); //5832
console.log(obj.getUglyNo(7)); //8
console.log(obj.getUglyNo(10)); //12
console.log(obj.getUglyNo(15)); //24
console.log(obj.getUglyArray(10));
