'use strict'

class UglyNumber {
  constructor(input) {
    this.input = input
    this.result = 1
  }

  getUglyNo() {
    let countUglyNumber = 1

    while(this.input > countUglyNumber) {
      this.result++;
      if(this.isUgly(this.result) == 1) {
        countUglyNumber++;
      }
    }
    return this.result;
  }

  isUgly(numberUgly) {
    numberUgly = this.maxDivide(numberUgly, 2);
    numberUgly = this.maxDivide(numberUgly, 3);
    numberUgly = this.maxDivide(numberUgly, 5);
    return (numberUgly == 1) ? true : false;
  }

  maxDivide(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }
}

//driver code
let UglyNo150 = new UglyNumber(150)
console.log(UglyNo150.getUglyNo()); //5832

let UglyNo7 = new UglyNumber(7)
console.log(UglyNo7.getUglyNo()); //8

let UglyNo10 = new UglyNumber(10)
console.log(UglyNo10.getUglyNo()); //12

let UglyNo15 = new UglyNumber(15)
console.log(UglyNo15.getUglyNo()); //24
