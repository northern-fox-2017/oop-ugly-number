'use strict'

class UglyNumber {
  constructor(num) {
    this.num = num
    this.arr = []
  }

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

    // return (numbers = 1) ? true : false;

    if (numberUgly == 1 ) {
       return true
    } else {
      return false
    }
  }

  getUglyArray() {
    // this.arr
    return this.arr
  }

   getUglyNo() {
    let arr = []
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(this.num > countUglyNumber) {

    debugger
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
        this.arr.push(i)
      }
    }
    return i;
  }
}

//driver code
let ugly = new UglyNumber(15)
// console.log(ugly);
console.log(ugly.getUglyNo())
console.log(ugly.getUglyArray())
