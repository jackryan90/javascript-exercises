const palindromes = function (word) {
  const input = (
    word
    .toLowerCase()
    .split("")
    .filter(char => /[a-zA-Z0-9]/.test(char))
    .join("")
  );
  const output = input.split("").toReversed().join("");
  return input === output;
};

// Do not edit below this line
module.exports = palindromes;
