class UglyNumber{
  constructor(){
  }
  getUglyNumber(number){
    let i = 1
    let countUglyNumber = 1
    while(number > countUglyNumber) {
      i++;
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
}

let ugly = new UglyNumber()
console.log(ugly.getUglyNumber(7))
console.log(ugly.getUglyNumber(150))
console.log(ugly.getUglyNumber(15))
console.log(ugly.getUglyNumber(10))
