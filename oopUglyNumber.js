class UglyNumber {
  constructor() {
    this.uglyArray = [];
  }
  maxDivide(number, divisible) {
    while (number % divisible === 0) {
      number /= divisible;
    }

    return number;
  }

  isUgly(numberUgly) {
    numberUgly = this.maxDivide(numberUgly, 2);
    numberUgly = this.maxDivide(numberUgly, 3);
    numberUgly = this.maxDivide(numberUgly, 5);

    return numberUgly == 1 ? true : false;
  }

  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1;

    while (input > countUglyNumber) {
      i++

      if (this.isUgly(i) == 1) {
        this.uglyArray.push(i);
        countUglyNumber++;
      }
    }

    return i
  }

  getUglyArray(input) {
    return this.uglyArray;
  }
}

const uglyNumber = new UglyNumber();
console.log(uglyNumber.getUglyNo(150)); // 5832
console.log(uglyNumber.getUglyNo(7)); // 8
console.log(uglyNumber.getUglyNo(10)); // 12
console.log(uglyNumber.getUglyNo(15)); // 24
console.log(uglyNumber.getUglyArray(15)); // 24