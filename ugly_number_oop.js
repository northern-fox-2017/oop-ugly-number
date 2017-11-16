'use strict'
class UglyNumber {
  constructor () {
    this.i = 1
    this.arr = [1]
  }

  maxDivides(number, divisible) {
    while(number % divisible == 0) {
      number = number/ divisible;
    }
    return number;
  }


  isUgly() {
    var numberUgly = this.i;
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }

  getUglyNo(input) {
    let countUglyNumber = 1; // ugly number count
    while(input > countUglyNumber){
      this.i++;
      if(this.isUgly() == 1) {
        countUglyNumber++;
          this.getUglyArray(this.i);
      }
    }
    return this;
  }

  getUglyArray() {
    this.arr.push(this.i)
  }

}


//driver code
  let uglyObj = new UglyNumber();
console.log(uglyObj.getUglyNo(7));
// console.log(uglyObj.getUglyArray(7));

 //5832
// 1 2 3 4 5 6 8 9 10 12
