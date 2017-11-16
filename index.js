class UglyNumber {
  constructor(num) {
    this.num = num
    this.arr = [1]
  }

  maxDivides(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly) {
    debugger;
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }

  getUglyNo() {
    let input = this.num
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      i++;

      if(this.isUgly(i) == 1) {
        this.getUglyArray(i)
        countUglyNumber++;
      }
    }

    return i;
  }

  getUglyArray(number){
    return this.arr.push(number);
  }

}

let newUgly = new UglyNumber(7)

console.log(newUgly.getUglyNo());
console.log(newUgly.arr);
