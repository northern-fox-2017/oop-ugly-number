'use strict'
/*
function maxDivides(number, divisible) {
  while(number % divisible == 0) {
    number = number / divisible;
	
  }
  return number;
}

function isUgly(numberUgly) {
  numberUgly = maxDivides(numberUgly, 2);
  numberUgly = maxDivides(numberUgly, 3);
  numberUgly = maxDivides(numberUgly, 5);
  
  return (numberUgly == 1) ? true : false;
}

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1; // ugly number count
  //let counts = 0;
  debugger
  while(input > countUglyNumber) {
    i++;
    if(isUgly(i) == 1) {
      countUglyNumber++;
	  
    }
	
  }
  return i
}
*/
//driver code
//console.log(getUglyNo(150)); //5832
//console.log(getUglyNo(7)); //8
//console.log(getUglyNo(10)); //12
//console.log(getUglyNo(15)); //24

class UglyNumber{
	constructor(i){
		this.i = 0
		this.countUglyNumber = 0
  }
  
  maxDivides(number, divisible) {
  while(number % divisible == 0) {
    number = number / divisible;
  }
  return number;
}
  
  isUgly(numberUgly) {
  numberUgly = this.maxDivides(numberUgly, 2);
  numberUgly = this.maxDivides(numberUgly, 3);
  numberUgly = this.maxDivides(numberUgly, 5);
  
  return (numberUgly == 1) ? true : false;
}
  
  getUglyNo(input) {
  //ugly number count
  //let counts = 0;
  //debugger
  while(input > this.countUglyNumber) {
    this.i++;
    if(this.isUgly(this.i) == 1) {
      this.countUglyNumber++;
	  
    }
	
  }
  return this.i
  
 }
 
  getUglyArray(input){
  this.countUglyNumber;
  var arr = [];
  while(input > this.countUglyNumber){
	this.i++;
	if(this.isUgly(this.i) == 1){
		this.countUglyNumber++
		arr.push(this.i)
	}
	
  } 
  return arr
}
  
  
}

let number = new UglyNumber
//console.log(number.getUglyNo(7))
console.log(number.getUglyArray(15))




























