class UglyNumber{

  constructor(){
    this.resultUgly = 1;
    this.currentUgly = undefined;
  }

  maxDivides(divisible) {
    while(this.currentUgly % divisible === 0) {
      this.currentUgly = this.currentUgly / divisible;
    }
  }

  isUgly() {
    this.currentUgly = this.resultUgly;
    this.maxDivides(2);
    this.maxDivides(3);
    this.maxDivides(5);
    return (this.currentUgly === 1) ? true : false;
  }

  getUglyNumber(input) {
    let countUglyNumber = 1; // ugly number count
    while(input > countUglyNumber) {
      this.resultUgly++;
      if (this.isUgly() === true) {
        countUglyNumber++;
      }
    }
    return this.resultUgly;
  }

  /*getUglyArray(){
    let arrResult = [];
    for(let i = 0; i < arguments.length; i++){
      let uglyObj = new UglyNumber();
      arrResult.push(uglyObj.getUglyNumber(arguments[i]))
    }
    return arrResult
  }*/

  getUglyArray(input){
    let uglyArray = [this.resultUgly];
    let countUglyNumber = 1; // ugly number count
    while(input > countUglyNumber) {
      this.resultUgly++;
      if (this.isUgly() === true) {
        countUglyNumber++;
        //console.log(this.resultUgly)
        uglyArray.push(this.resultUgly);
      }
    }
    return uglyArray;

  }


}

var uglyNumber = new UglyNumber()
var uglyNumber7 = new UglyNumber()
var uglyNumber10 = new UglyNumber()
var uglyNumber15 = new UglyNumber()
var uglyNumberArr = new UglyNumber()

//console.log(uglyNumber)
console.log(uglyNumber.getUglyNumber(150))//5832
console.log(uglyNumber7.getUglyNumber(7)); //8
console.log(uglyNumber10.getUglyNumber(10)); //12
console.log(uglyNumber15.getUglyNumber(15)); //24
console.log(uglyNumberArr.getUglyArray(10))