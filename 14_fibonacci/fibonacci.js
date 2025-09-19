const fibonacci = function(member) {
  member = +member;
  if (member < 0) return "OOPS";

  let lastTwo = [0, 1];

  if (member < 2) {
    return lastTwo[member];
  }

  for (let i = 2; i < member; i++) {
    const next = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = next;
  }

  return lastTwo[0] + lastTwo[1];
};

// Do not edit below this line
module.exports = fibonacci;
