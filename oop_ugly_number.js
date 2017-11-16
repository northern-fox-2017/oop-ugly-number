class UglyNumber {
  constructor() {
    this.ugly = []
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
    let i = 1;
    let countUglyNumber = 1; // ugly number count
    debugger
    // this.ugly.push(i)
    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        this.getUglyArray()
        countUglyNumber++;
      }
    }
    return i;
  }
  getUglyArray (input){
    for (var i = 1; i <= input; i++) {
      let uglynumber = this.getUglyNo(i)
      this.ugly.push(uglynumber)
    }
    return this.ugly
  }

}

let number = new UglyNumber ()
console.log(number.getUglyNo(7));
console.log(number.getUglyArray(15));
