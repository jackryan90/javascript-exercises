const sumAll = function(num1, num2) {
  for (let arg of arguments) {
    if ((typeof arg !== "number") || (arg < 0) || (!Number.isInteger(arg))) {
      return "ERROR";
    };
  }
  
  let args = [num1, num2];
  args.sort((a, b) => a - b);

  let sum = 0;
  for (let i = args[0]; i <= args[1]; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
