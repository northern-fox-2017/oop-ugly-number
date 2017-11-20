class UglyNumber {
  constructor(number) {
    this.number = number
    this.uglyNumbers = []
    this.i = 1

  }
  maxDivides(number, divisible) {
    while (number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }
  isUgly() {
    let numberUgly = this.i
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);
    this.i = numberUgly === 1 ? this.i : numberUgly
    return numberUgly === 1
  }
  getUglyNo() {
    let countUglyNumber = 1; // ugly number count
    while (this.number > countUglyNumber) {
      this.i++
      if (this.isUgly()) {
        this.uglyNumbers.push(this.i)
        countUglyNumber++;
      }
    }
    return this.i;
  }
  getUglyArray() {
    return this.uglyNumbers
  }
}


let ugli = new UglyNumber(7)
console.log(`Ugly Number: ${ugli.getUglyNo()}`)
console.log(`Ugly Array: `, ugli.getUglyArray())


let uglii = new UglyNumber(10)
console.log(`Ugly Number: ${uglii.getUglyNo()}`)
console.log(`Ugly Array: `, uglii.getUglyArray())