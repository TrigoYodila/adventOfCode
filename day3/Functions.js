const default_value = require("./Letters");

//Function part I
const getRucksackNumberOfCompartiments = (bag) => {
  const firstCompartiment = bag.slice(0, bag.length / 2);
  const secondCompartiment = bag.slice(bag.length / 2);
  const keyArticle = getKeyOfArticle(firstCompartiment, secondCompartiment);
  return getNumberOfKeyArticle(keyArticle);
};

const getKeyOfArticle = (firstCompartiment, secondCompartiment) => {
  for (let i = 0; i < firstCompartiment.length; i++)
    if (secondCompartiment.includes(firstCompartiment[i]))
      return firstCompartiment[i];
};

const getNumberOfKeyArticle = (key) => {
  return default_value.indexOf(key) + 1;
};

//Functions Part 2
const getKeyOfGroup = (group) => {
  const firstSelf = group[0];
  const secondSelf = group[1];
  const thirdSelf = group[2];

  for (let i = 0; i < default_value.length; i++) {
    if (
      firstSelf.includes(default_value[i]) &&
      secondSelf.includes(default_value[i]) &&
      thirdSelf.includes(default_value[i])
    ) {
      return default_value[i];
    }
  }
};
const getSumOfBadge = (bags) => {
  let prioritySum = 0;
  while (bags.length !== 0) {
    const res = bags.splice(0, 3);
    const value = getKeyOfGroup(res);
    prioritySum = prioritySum + getNumberOfKeyArticle(value);
  }
  return prioritySum;
};

module.exports = { getSumOfBadge,getRucksackNumberOfCompartiments };
