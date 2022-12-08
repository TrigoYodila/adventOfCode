const fs = require("fs");


const data = fs.readFileSync('./data.txt',
            {encoding:'utf8', flag:'r'});

  let pairs = data.toString().split("\n");
  let countAffectationPair = 0


const checkingRepeatFirstPair = (startfirstpair, endfirstpair,startsecondpair, endsecondpair) => {
    let exist = false
    if (startsecondpair !== endsecondpair) {
      for (let i = startsecondpair; i <= endsecondpair; i++) {
        if (i >= startfirstpair && i <= endfirstpair) exist = true
        else {
            exist = false
            break
        }
      }
    } else if(startsecondpair === endsecondpair){
      if (startsecondpair >= startfirstpair && startsecondpair <= endfirstpair) exist = true
      else exist = false;
    }
    return exist
};


  pairs.map((pair)=>{
    const startFirtpair = parseInt(pair.split(",")[0].split("-")[0])
    const endFirtpair = parseInt(pair.split(",")[0].split("-")[1]);
    const startsecondpair = parseInt(pair.split(",")[1].split("-")[0])
    const endsecondpair = parseInt(pair.split(",")[1].split("-")[1])

    const firstCheckpair = checkingRepeatFirstPair(startFirtpair,endFirtpair,startsecondpair,endsecondpair);
    const secongCheckpair = checkingRepeatFirstPair(startsecondpair,endsecondpair,startFirtpair,endFirtpair);
    
    if(firstCheckpair || secongCheckpair) countAffectationPair += 1

  })
console.log("Nombre de pairs ", countAffectationPair)
// console.log("Nombre de pairs \n", checkingRepeatFirstPair(5,33,5,5));