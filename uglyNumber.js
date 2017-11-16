class UglyNumber {
  constructor(){
    this.uglyArray = []
    this.uglyNumber = 1
  }
  maxDivide(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }
  isUgly(numberUgly) {
    numberUgly = this.maxDivide(numberUgly, 2);
    numberUgly = this.maxDivide(numberUgly, 3);
    numberUgly = this.maxDivide(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }
  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
      }
    }
    return i;
  }
  getUglyArray(number){
    let uglyArray = []
    for (let i = 0; i < number; i++) {
      if (this.isUgly(this.uglyNumber) != 1) {
        i -= 1
        this.uglyNumber += 1
      } else {
        uglyArray.push(this.uglyNumber)
        this.uglyNumber += 1
      }
    }
    return uglyArray
  }
}

let ugly = new UglyNumber()

//driver code
console.log(ugly.getUglyNo(150)); //5832

console.log(ugly.getUglyNo(7)); //8
console.log('Array of 7 ugly numbers: ' + ugly.getUglyArray(7)); //[ 1, 2, 3, 4, 5, 6, 8 ]
console.log(ugly.getUglyNo(10)); //12
console.log('Array of 10 ugly numbers: ' + ugly.getUglyArray(10));//[ 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 ]
console.log(ugly.getUglyNo(15)); //24
console.log('Array of 15 ugly numbers: ' + ugly.getUglyArray(15));//[ 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24 ]

