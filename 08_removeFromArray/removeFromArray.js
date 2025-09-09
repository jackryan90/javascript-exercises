const removeFromArray = function(arr, ...args) {
  let results = arr.slice();
  for (let arg of args) {
    results = results.filter(item => item !== arg)
  }
  return results;
};

// Do not edit below this line
module.exports = removeFromArray;
