class UglyNumber {
  constructor(i) {
    this.i = i
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

  getUglyNo() {
    let i = 1;
    let countUglyNumber = 1; // ugly number count
    // debugger
    while(this.i > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
      }
    }
    return i
  }

  getUglyArray() {
    var uglyArr = [];
    let countUglyNumber = 1; // ugly number count
    let i = 1;
    while(this.i > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
        uglyArr.push(i)
      }
    }
    return uglyArr
  }

}

let number7 = new UglyNumber(7);
let number15 = new UglyNumber(15);

// console.log(number7); //24
// console.log(number7.getUglyNo());
console.log(number15.getUglyNo());
console.log(number15.getUglyArray());


// console.log(getUglyNo(150)); //5832
// console.log((7)); //8
// console.log(getUglyNo(10)); //12
// console.log(getUglyNo(15)); //24
