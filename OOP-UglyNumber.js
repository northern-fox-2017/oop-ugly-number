class UglyNumber {
  constructor(number) {
    this.number = number
    this.array = [];
  }

  getUglyNo() {
     let i = 1;
     let countUglyNumber = 1; // ugly number count
     while(this.number > countUglyNumber) {
       i++;

       if(this.isUgly(i) == 1) {
         countUglyNumber++;
        //  this.getUglyArray(i)
         debugger
        //  console.log(i);
       }
     }
     return i
   }

   isUgly(numberUgly) {
     numberUgly = this.maxDivides(numberUgly, 2);
     numberUgly = this.maxDivides(numberUgly, 3);
     numberUgly = this.maxDivides(numberUgly, 5);
     if(numberUgly == 1) {
       return true
     } else {
       return false
     }
   }

   maxDivides(number, divisible) {
     while(number % divisible == 0) {
       number = number / divisible;
     }
     return number;
   }

   getUglyArray(num){
    //  panggil si getUglyNo
    //  push ke array nya
    //  console.log("MASUK NIH:", num);
    //  console.log("array,", this.array);
     this.array.push(num)
     return this.array
     console.log(num);
   }
}
let ugly = new UglyNumber(9)
console.log(ugly.getUglyNo());
// console.log(ugly.);
