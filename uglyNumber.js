class UglyNumber{
  constructor(){
    this.uglyArray = []
  }
  getUglyNumber(number){
    let i = 1
    let countUglyNumber = 1
    while(number > countUglyNumber) {
      i++;
      this.uglyArray.push(i)
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
      }
    }
    return i
  }
  isUgly(numberUgly) {
    numberUgly = this.maxDivide(numberUgly, 2);
    numberUgly = this.maxDivide(numberUgly, 3);
    numberUgly = this.maxDivide(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }
  maxDivide(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }
  getUglyArray(number){
    this.uglyArray = []
    return `Ugly number of ${number} is ${this.getUglyNumber(number)}. List of all ugly numbers before ${number} is ${this.uglyArray}`
  }
}

let ugly = new UglyNumber()

console.log(ugly.getUglyArray(7))
// console.log(ugly.getUglyArray(150))
console.log(ugly.getUglyArray(15))
console.log(ugly.getUglyArray(10))
