'use strict'

class UglyNumber {
  constructor(uglyNo){
    this.uglyNo = uglyNo;

  }

  maxDivide(isNumUgly, divisible){
    this.divisible = divisible;
    this.isNumUgly = isNumUgly;
    while(this.isNumUgly % divisible === 0){
      this.isNumUgly = this.isNumUgly / divisible;
    }
    return this.isNumUgly;
  }

  isUgly(ugly){
    this.ugly = ugly;
    this.ugly = this.maxDivide(this.ugly, 2);
    this.ugly = this.maxDivide(this.ugly, 3);
    this.ugly = this. maxDivide(this.ugly, 5);

    return (this.ugly === 1) ? true : false;
  }

  getUglyNo() {
    let i = 1;
    let countUglyNumber = 1;
    while(this.uglyNo > countUglyNumber){
      i++;
      if(this.isUgly(i) === true ){
        countUglyNumber++;
      }
    }
    return i;

  }

  getUglyArray(){
    let i = 0;
    let countUglyNumber = 1;
    let result = [];
    debugger;
    while(this.uglyNo >= countUglyNumber){
      i++;
      if(this.isUgly(i) === true ){
        result.push(i);
        countUglyNumber++;
      }
    }
    return result;
  }
  
}

let uglyNumberAndrey = new UglyNumber(15);
console.log(uglyNumberAndrey.getUglyArray());

// console.log(uglyNumberAndrey.getUglyNo());