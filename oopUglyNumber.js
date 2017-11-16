'use strict'

class UglyNUmber{
  constructor(){
    this.arr = [1]
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

    return (numberUgly == 1) ? true : false;
  }

  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
        // console.log(i);
        this.arr.push(i)
        // console.log(this.arr);
      }
    }
    return i;
  }

  getUglyArray() {
    return this.arr
  }
}

let uglyNUmber = new UglyNUmber()
// console.log(uglyNUmber.getUglyNo(7));
// console.log(uglyNUmber.getUglyArray());

console.log(uglyNUmber.getUglyNo(10));
console.log(uglyNUmber.getUglyArray());
