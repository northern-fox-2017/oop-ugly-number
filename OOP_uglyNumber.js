'use strict'
class UglyNumber {
    constructor() {
        this.i = 1
        this.result = [];
    }

    maxDivide(number, divisible) {
        while (number % divisible == 0) {
            number = number / divisible;
        }
        return number;
    }

    isUgly(numberUgly) {
        numberUgly = this.maxDivide(numberUgly, 2);
        numberUgly = this.maxDivide(numberUgly, 3);
        numberUgly = this.maxDivide(numberUgly, 5);

        return (numberUgly === 1) ? true : false;
    }

    getUglyNo(input) {
        let countUglyNumber = 1; // ugly number count
        this.getUglyArray(this.i);
        while (input > countUglyNumber) {
            this.i++;
            if (this.isUgly(this.i) == 1) {
                this.getUglyArray(this.i);
                countUglyNumber++;
            }
        }
        return this
    }

    getUglyArray(methInput) {  
        this.result.push(methInput);
    }
}

// console.log(UglyNumber.getUglyNo(150));
console.log(new UglyNumber().getUglyNo(7));
console.log(new UglyNumber().getUglyNo(10));
// console.log(UglyNumber.getUglyNo(15));