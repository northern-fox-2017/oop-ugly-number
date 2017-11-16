class UglyNumber {
  constructor(i) {
    this.i = 0
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
    // let i = 1;
    let countUglyNumber = 1; // ugly number count
    // debugger
    while(input > countUglyNumber) {
      this.i++;
      if(this.isUgly(this.i) == 1) {
        countUglyNumber++;
      }
    }
    return this.i;
  }

  getUglyArray(input) {
    var uglyArr = [];
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      this.i++;
      if(this.isUgly(this.i) == 1) {
        countUglyNumber++;
        uglyArr.push(this.i)
      }
    }
    return uglyArr
  }

}


var number = new UglyNumber

// console.log(number.getUglyNo(15)); 24
console.log(number.getUglyArray(15));


// console.log(getUglyNo(150)); //5832
// console.log((7)); //8
// console.log(getUglyNo(10)); //12
// console.log(getUglyNo(15)); //24
