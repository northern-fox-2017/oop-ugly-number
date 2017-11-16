'use strict'
class  uglyNumber {
    constructor(){
        this.i = 1;
        this.arr = []
    }

    getUglyNo(input) {
        debugger
          let countUglyNumber = 1; // ugly number 
          this.getUglyArray(this.i)
          while(input > countUglyNumber) {
            this.i++;
            if(this.isUgly() == 1) {
                this.getUglyArray(this.i)
                countUglyNumber++;
            
            }
        }
        return this
        }
        
    isUgly() {
         let numberUgly = this.i
         numberUgly = this.maxDivides(numberUgly, 2);
         numberUgly = this.maxDivides(numberUgly, 3);
         numberUgly = this.maxDivides(numberUgly, 5);
         return (numberUgly == 1) ? true : false;
    }
    
    maxDivides(number, divisible) {
         while(number % divisible == 0) 
         {number = number / divisible;
        }
        return number;
    }

    getUglyArray(){
        this.arr.push(this.i)
        return this;

    }


}


let UglyNum = new uglyNumber()
console.log(UglyNum.getUglyNo(11))
// console.log(UglyNum.getUglyArray())


//driver code
// console.log(getUglyNo(150)); //5832
// console.log(getUglyNo(7)); //8
// console.log(getUglyNo(10)); //12
// console.log(getUglyNo(15)); //24
