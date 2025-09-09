const repeatString = function(word, numRepeats) {
  if (numRepeats < 0) {
    return "ERROR";
  }

  let result = "";
  for (let i = 0; i < numRepeats; i++) {
    result += word;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
