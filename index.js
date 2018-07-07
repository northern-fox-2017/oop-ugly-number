'use strict'

class UglyNumber {
  constructor(uglyNo){
    this.uglyNo = uglyNo;
    this.i = 0;
    this.countUglyNumber = 0;
    this.result =[];

  }

  maxDivide(isNumUgly, divisible){
    this.divisible = divisible;
    this.isNumUgly = isNumUgly;
    while(this.isNumUgly % divisible === 0){
      this.isNumUgly = this.isNumUgly / divisible;
    }
    return this.isNumUgly;
  }

  isUgly(){

    this.ugly = this.i;
    debugger
    this.ugly = this.maxDivide(this.ugly, 2);
    this.ugly = this.maxDivide(this.ugly, 3);
    this.ugly = this.maxDivide(this.ugly, 5);

    return (this.ugly === 1) ? true : false;
  }

  getUglyNo() {
    while(this.uglyNo > this.countUglyNumber){
      this.i++;
      if(this.isUgly() === true ){
        this.countUglyNumber++;
      }
    }
    return this.i;

  }

  getUglyArray(deret){
    this.deret = deret;
    this.i = 0
    this.countUglyNumber = 0;
    while(this.deret > this.countUglyNumber){
      this.i++;
      if(this.isUgly() === true){
        this.result.push(this.i);
        this.countUglyNumber++;
      }
    }
    return this.result;
  }
  
}

let uglyNumberAndrey = new UglyNumber(15);
console.log(uglyNumberAndrey.getUglyNo());
console.log(uglyNumberAndrey.getUglyArray(15));

// console.log(uglyNumberAndrey.getUglyNo());