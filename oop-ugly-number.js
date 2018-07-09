class UglyNumber {
    constructor(){
       this.hasilSemuaArray = [];
       this.i = 1;
    }
    
    maxDivide(number, divisible) {
        debugger;
        while(number % divisible == 0) {
          number = number / divisible;
        }
        return number;
        
      }

    isUgly(numberUgly) {
        debugger;
        
        numberUgly = this.maxDivide(numberUgly, 2);
        numberUgly = this.maxDivide(numberUgly, 3);
        numberUgly = this.maxDivide(numberUgly, 5);
      
        return (numberUgly === 1) ? true : false;
      }

    getUglyNo(input) {  
        debugger;
        //let i = 1;
        let countUglyNumber = 1; // ugly number count
        
        while(input > countUglyNumber) {
          this.i++;
          if(this.isUgly(this.i) == 1) {
            this.getUglyArray(this.i);
            countUglyNumber++;
          }
        }
        return this.hasilSemuaArray;
      }

    getUglyArray(number){
        this.hasilSemuaArray.push(number);
        return number;
    }
};

var baru = new UglyNumber();
console.log(baru.getUglyNo(150));
