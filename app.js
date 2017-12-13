class UglyNumber {
	constructor(input){
		this.input = input;
	}
	maxDivide(number, divisible) {
  		while(number % divisible == 0) {
    		number = number / divisible;
  		}
  		return number;
	}
	isUgly(numberUgly) {
  		numberUgly = this.maxDivide(numberUgly, 2);
  		numberUgly = this.maxDivide(numberUgly, 3);
  		numberUgly = this.maxDivide(numberUgly, 5);  
  		return (numberUgly == 1) ? 1 : numberUgly;
	}
	getUglyNo(input = this.input) {
  		let i = 1;
  		let countUglyNumber = 1; // ugly number count
  		while(input > countUglyNumber) {
    		i++;
    		if(this.isUgly(i) == 1) {
      			countUglyNumber++;
    		}
  		}
  		return i;
	}
	getUglyArray(input) {
		let i = 0;
		let countUglyNumber = 1;
		let result = []
		while (input >= countUglyNumber) {
			i++;
			if (this.isUgly(i)==1) {
				countUglyNumber++;
				result.push(i);
			}
		}
		return result;
	}
}

let ugly = new UglyNumber()
debugger;

/*console.log(ugly.getUglyNo(150));
console.log(ugly.getUglyNo(7));
console.log(ugly.getUglyNo(10));
console.log(ugly.getUglyNo(15));*/
console.log(ugly.getUglyNo(10));

console.log(ugly.getUglyArray(12));