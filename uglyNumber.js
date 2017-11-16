'use strict'

class UglyNumber {
  constructor(input) {
    this.input = input
    this.arr = [1]
    this.result = 1
  }

  getUglyArray() {
    return this.arr
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
    if (numberUgly == 1) {
      this.arr.push(this.result)
      return true
    } else {
      return false
    }
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
console.log(UglyNo150.getUglyArray());

let UglyNo7 = new UglyNumber(7)
console.log(UglyNo7.getUglyNo()); //8
console.log(UglyNo7.getUglyArray());

let UglyNo10 = new UglyNumber(10)
console.log(UglyNo10.getUglyNo()); //12
console.log(UglyNo10.getUglyArray());

let UglyNo15 = new UglyNumber(15)
console.log(UglyNo15.getUglyNo()); //24
console.log(UglyNo15.getUglyArray());
