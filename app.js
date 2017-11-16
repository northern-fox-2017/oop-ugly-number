class UglyNumber {

  constructor () {
    this.arrUglyNumber = [];
  }

  maxDivides(number, divisible) {
    // console.log("masuk maxDivides");
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly) {
    // console.log("masuk maxDivides");
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    // return (numberUgly = 1) ? true : false;
    // sama artinya seperti kode dibawah
    if(numberUgly == 1) {
      return true
    } else {
      return false
    }
  }

  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
      }
      // console.log(i)
    }
    return i;
  }

  getUglyArr(input){

    for(let i=1; i <= input; i++){
      this.arrUglyNumber.push(this.getUglyNo(i));
    }

    return this.arrUglyNumber
  }

}

let uglyNo = new UglyNumber();
// console.log(uglyNo);

console.log(uglyNo.getUglyNo(150)); //5832
console.log(uglyNo.getUglyNo(7)); //8
console.log(uglyNo.getUglyNo(10)); //12
console.log(uglyNo.getUglyNo(15));
console.log(uglyNo.getUglyArr(7)); //[1,2,3,4,5,6,8]
