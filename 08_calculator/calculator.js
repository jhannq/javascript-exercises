const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
	for (let i =0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
	for (let i =0; i<arr.length; i++){
    sum *= arr[i];
  }
  return sum;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let sum = 1;
	for (let i =a; i>0; i--){
    sum *=i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
