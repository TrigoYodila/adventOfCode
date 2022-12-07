const default_value = require("./Letters");

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

module.exports = getRucksackNumberOfCompartiments;
