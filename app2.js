class UglyNumber {
	constructor(input){
		this.input = input;
		this.currUglyNumber = 1;
		this.currUglyNumberArr = 1;
		this.perhitungan = 0;
		this.result = [1];
	}
	maxDivide(divisible) {
  		while(this.perhitungan % divisible == 0) {
    		this.perhitungan /= divisible;
  		}
	}
	isUgly() { //currUglynumber
		this.perhitungan = this.currUglyNumber;
  		this.maxDivide(2);
  		this.maxDivide(3);
  		this.maxDivide(5);  
  		return (this.perhitungan == 1) ? 1 : this.perhitungan;
	}
	getUglyNo(input = this.input) {
		let countUglyNumber = 1;
  		while(input > countUglyNumber) {  			
    		this.currUglyNumber++;
    		if(this.isUgly() == 1) {
      			countUglyNumber++;
      			this.result.push(this.currUglyNumber);
    		}
  		}
  		return this.currUglyNumber;
	}
	getUglyArray(input) {
		let result = [1];
		let countUglyNumber = 1;
  		while(input > countUglyNumber) {  			
    		this.currUglyNumberArr++;
    		if(this.isUgly() == 1) {
      			result.push(this.currUglyNumberArr);
      			countUglyNumber++;
    		}
  		}
		return result;
	}
}

let ugly = new UglyNumber()

/*console.log(ugly.getUglyNo(150));
console.log(ugly.getUglyNo(7));
console.log(ugly.getUglyNo(10));
console.log(ugly.getUglyNo(15));*/
console.log(ugly.getUglyNo(10));

console.log(ugly.getUglyArray(12));