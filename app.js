class UglyNumber {
  constructor(num) {
    this.num = num
    this.arr = [1]
  }

  maxDivides(number,divisible){
    while(number % divisible == 0){
      number = number /divisible
    }
    return number;
  }
  isUgly(numberUgly){
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }
  getUglyNo(){
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(this.num > countUglyNumber) {
      debugger
      i++;
      if(this.isUgly(i) == 1) {
        this.arr.push(i)
        countUglyNumber++;
      }
    }
    return i
  }
  getUglyArray(){
    this.getUglyNo()
    return this.arr;
  }
}

let angka7 = new UglyNumber(7)
let angka150 = new UglyNumber(8)
console.log(angka150.getUglyArray());
console.log(angka7.getUglyArray());
