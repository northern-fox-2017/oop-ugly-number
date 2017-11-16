class UglyNumber{
  constructor(num){
    this.number = num
    this.arrUgly = []
  }

  maxDivide(number,divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly){
    numberUgly = this.maxDivide(numberUgly, 2);
    numberUgly = this.maxDivide(numberUgly, 3);
    numberUgly = this.maxDivide(numberUgly, 5);

    if(numberUgly == 1){
      return true
    } else {
      return false
    }
  }

  getUglyNo(){
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(this.number > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        this.arrUgly.push(i)
        countUglyNumber++;
      }
    }
    return i
  }

  getUglyArray(){
    return this.arrUgly;
  }
}

let ugly15 = new UglyNumber(15)
console.log(ugly7.getUglyNo())
console.log(ugly7.getUglyArray())
