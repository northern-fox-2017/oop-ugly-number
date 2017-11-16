class  uglyNumber {
  constructor() {
    this.i = 1;
    this.resultArr = [1];
  }

  maxDivide(number, divisible){
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }
  isUgly(){
    let numberUgly = this.i;
    numberUgly = this.maxDivide(numberUgly, 2);
    numberUgly = this.maxDivide(numberUgly, 3);
    numberUgly = this.maxDivide(numberUgly, 5);
    return (numberUgly === 1) ? true : false;
  }
  getUglyNo(input){
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      this.i++;
      if(this.isUgly() == 1) {
        this.getUglyArray(this.i)
        countUglyNumber++;
      }
    }
    return this;
  }
  getUglyArray(output){
    this.resultArr.push(output);
    return this;
  }
}

console.log(new uglyNumber().getUglyNo(7)); //8
console.log(new uglyNumber().getUglyNo(10)); //12
console.log(new uglyNumber().getUglyNo(15)); //24
// console.log(new uglyNumber().getUglyNo(150)); //5832
