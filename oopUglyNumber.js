'use strict'

class UglyNumber {
  constructor() {
    this.i = 1;
    this.arr = [];
  }

  maxDivides(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;

  }

  isUgly() {
    let numberUgly = this.i;
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true : false;

  }

  getUglyNo(input) {
    let countUglyNumber = 1; // ugly number count
    this.arr.push(this.i)
    while(input > countUglyNumber) {
      this.i++;
      if(this.isUgly() == 1) {
        this.getUglyArray(this.i)
        countUglyNumber++;
      }
    }

    return this;
  }

  getUglyArray() {
    this.arr.push(this.i);
  }
}

var uglyNumberTest = new UglyNumber()
var uglyNumberCheck = new UglyNumber()

console.log(uglyNumberTest.getUglyNo(150));
console.log(uglyNumberCheck.getUglyNo(7));
// console.log(uglyNumberTest.getUglyNo(10));
// console.log(uglyNumberTest.getUglyNo(15));
//driver code
