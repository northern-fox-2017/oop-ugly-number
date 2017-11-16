class UglyNumber {
  constructor() {
    this.i = 1
    this.array = [1]
  }
  
  maxDivides(number, divisible) {
    while (number % divisible === 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly() {
    let numberUgly = this.i
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly === 1) ? true : false;
  }

  getUglyNo(input) {    
    let countUglyNumber = 1; // ugly number count    
    while (input > countUglyNumber) {
      this.i++;
      if (this.isUgly() == 1) {        
        countUglyNumber++;     
        this.array.push(this.i)   
      } 
           
    }
    return this.i;
  }

  getUglyArray(){
    return this.array
  }

}

let number150 = new UglyNumber()
console.log(number150.getUglyNo(7))
console.log(number150.getUglyArray())