const fs = require("fs");

const confrontationData = [];
fs.readFile("data.txt", "utf8", function (err, data) {
  const content = data;
  //  let mainArraySplit= content.toString().split("\n")
  let mainArraySplit = content
    .toString()
    .split("\n")

  let sumScore = 0;

  confrontationData.map((item) => {
    if (item.me === "Z") {
      if (item.adversaire === "A") sumScore = sumScore + 8;
      else if (item.adversaire === "B") sumScore = sumScore + 9;
      else if (item.adversaire === "C") sumScore = sumScore + 7;
    } else if (item.me === "X") {
       if (item.adversaire === "A") sumScore = sumScore + 3;
       else if (item.adversaire === "B") sumScore = sumScore + 1;
       else if (item.adversaire === "C") sumScore = sumScore + 2;
    } else if (
      (item.me === "Y" )
    ) {
      if (item.adversaire === "A") sumScore = sumScore + 4;
      else if (item.adversaire === "B") sumScore = sumScore + 5;
      else if (item.adversaire === "C") sumScore = sumScore + 6;
    }

    return sumScore;
  });

  console.log("RESULTAT ", sumScore);
});
