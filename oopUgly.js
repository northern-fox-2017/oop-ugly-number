class UglyNumber{
    constructor(number){
        this.number=number;
        this.arrayTampung=[];
        this.i=1;
    }
    maxDivides(number,divisible){
        while(number % divisible == 0) {
            number = number / divisible;
          }
        return number;
    }
    isUgly() {
        let numberUgly = this.i;
        numberUgly = this.maxDivides(numberUgly, 2);
        numberUgly = this.maxDivides(numberUgly, 3);
        numberUgly = this.maxDivides(numberUgly, 5);
        return numberUgly===1;
    }
    getUglyNo() {//7
        let countUglyNumber = 1; // ugly number count
        if(this.isUgly()) {//isUgly(8)
            this.arrayTampung.push(this.i)
        }
        while(this.number > countUglyNumber) {
            this.i++;//2
          if(this.isUgly()) {//isUgly(8)
            this.arrayTampung.push(this.i)
            countUglyNumber++;
          }
          // return i; 
        }
    
        return this.i;
    }
    getUglyArray(){
        return this.arrayTampung;
    }
}

var Ugly = new UglyNumber(7)
console.log(`Ugly Target= ${Ugly.getUglyNo()}`)
console.log(`Ugly Array= ${Ugly.getUglyArray()}`)