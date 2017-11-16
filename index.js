class UglyNumber {
  constructor(number){
    this.number = number
    this.uglyNumbers = []
  }
  maxDivides (number, divisible){
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }
  isUgly (numberUgly){
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);
    return numberUgly === 1
  }
  getUglyNo(){
    let i = 1;
    let countUglyNumber = 1; // ugly number count
  
    while(this.number > countUglyNumber) {
      i++;
      if(this.isUgly(i)) {
        this.uglyNumbers.push(i)
        countUglyNumber++;
      }
    }
    return i;
  }
  getUglyArray(){
    return this.uglyNumbers
  }
}


let ugli = new UglyNumber(7)
console.log(`Ugly Number: ${ugli.getUglyNo()}`)
console.log(`Ugly Array: `, ugli.getUglyArray())


let uglii = new UglyNumber(10)
console.log(`Ugly Number: ${uglii.getUglyNo()}`)
console.log(`Ugly Array: `, uglii.getUglyArray())