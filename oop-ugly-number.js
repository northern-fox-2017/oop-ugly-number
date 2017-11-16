'use strict'

class UglyNumber {
    constructor(){
        this.i = 1;
        this.countUglyNumber = 1;
        this.result = [];
    }

    maxDivide(number, divisible) {
        while (number % divisible == 0) {
            number = number / divisible;
        }
        return number;
    };

    isUgly() {
        let numberUgly = this.i;
        numberUgly = this.maxDivide(numberUgly, 2);
        numberUgly = this.maxDivide(numberUgly, 3);
        numberUgly = this.maxDivide(numberUgly, 5);
        return (numberUgly == 1) ? true : false;
    }

    getUglyNo(input) {
        this.result.push(this.i);
        
        while (input > this.countUglyNumber) {
            this.i++;
            if (this.isUgly() == 1) {
                this.result.push(this.i);
                this.countUglyNumber++;
            }
        }
        return this;
    }

    getUglyArray(input){
        this.getUglyNo(input);
        return this;
    }
}



//driver code

console.log(new UglyNumber().getUglyArray(150)); //5832
console.log(new UglyNumber().getUglyNo(7)); //8
console.log(new UglyNumber().getUglyNo(10)); //12
console.log(new UglyNumber().getUglyNo(15)); //24