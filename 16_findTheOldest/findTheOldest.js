const findTheOldest = function(people) {
  people.sort((a, b) => {
    const ages = [a, b].map((person) => {
      if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
      }
      const currentYear = new Date().getFullYear();
      return currentYear - person.yearOfBirth;
    });
    return ages[0] - ages[1];
  });

  return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
