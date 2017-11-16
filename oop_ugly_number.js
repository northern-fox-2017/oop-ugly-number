class UglyNumber {
  constructor() {
    this.ugly = []
    this.i = 1
    this.countUglyNumber = 1
  }

  maxDivides(number, divisible) {
    debugger
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly) {
    debugger
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }

  getUglyNo(input) {
    // ugly number count
    // this.i = 1
    debugger
    // this.ugly.push(i)
    while(input > this.countUglyNumber) {
      this.i++;
      // console.log(this.i);
      if(this.isUgly(this.i) == 1) {
        this.getUglyArray()
        this.countUglyNumber++;
      }
    }
    return this.i;
  }
  getUglyArray (input){
    for (var i = 1; i <= input; i++) {
      let uglynumber = this.getUglyNo(i)
      // console.log(uglynumber);
      this.ugly.push(uglynumber)
    }
    return this.ugly
  }

}

let number = new UglyNumber ()
console.log(number.getUglyNo(7));

console.log(number.getUglyArray(15));
