const fs = require("fs");

const {getSumOfBadge, getRucksackNumberOfCompartiments} = require("./Functions");

fs.readFile("./data.txt", "utf8", function (err, data) {
  const content = data;

  let bags = content.toString().split("\n");
  let prioritySum = 0

  //par 1
  bags.map((bag)=>{
    prioritySum = prioritySum + getRucksackNumberOfCompartiments(bag);
  })

  //part 2
  const prioritySumPart2 = getSumOfBadge(bags)
  console.log("part 1", prioritySum);
  console.log("part 2 ", prioritySumPart2);

});
