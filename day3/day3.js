const fs = require("fs");

const getRucksackNumberOfCompartiments = require("./Functions");

fs.readFile("./data.txt", "utf8", function (err, data) {
  const content = data;

  let bags = content.toString().split("\n");
  let prioritySum = 0

  bags.map((bag)=>{
    prioritySum = prioritySum + getRucksackNumberOfCompartiments(bag);
  })

  console.log("values ", prioritySum);

});
