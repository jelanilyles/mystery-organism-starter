// Global Variables
let num = 0;
// callByRefernce(num);


// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Creates new organism instance
const pAequorFactory = (specimenNum, strand) => {
  specimenNum++;
  num = specimenNum;
  return {
    specimenNum: specimenNum,
    dna: strand,
    mutate(){
      let index = Math.floor(Math.random()*15);
      let oldBase = this.dna[index];
      let newBase;
      do {
        newBase = returnRandBase();
        this.dna[index] = newBase;
        // console.log('try');
      } while (newBase === oldBase);
      
      return this.dna;
    },
    compareDNA(pAequor){
      let commonStrands = 0;
      for(let i = 0; i < 15; i++){
        if(this.dna[i] === pAequor.dna[i]){
          commonStrands++;
        }
      }
      console.log('specimen #1 and specimen #2 have ' + (100*commonStrands/15).toPrecision(4) + '% DNA in common.');
    },
    willLikelySurvive(){
      let goodStrands = 0;
      for(let i = 0; i < 15; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          goodStrands++;
        }
      }
      let percentage = goodStrands/15;
      if(percentage >= 0.6){
        return true;
      } else {
        return false;
      }
    }
  }
}

const instances = [];
while(instances.length < 30){
  let inst = pAequorFactory(num,mockUpStrand());
  if(inst.willLikelySurvive()){
    instances.push(inst);
  }
}

console.log(instances);



// const test = pAequorFactory(num,mockUpStrand());
// console.log(test, test.willLikelySurvive());

// num++;
// console.log(num);
// const test2 = pAequorFactory(num,mockUpStrand());
// console.log(test2, test2.willLikelySurvive());

// num++;
// console.log(num);
// const test3 = pAequorFactory(num,mockUpStrand());
// console.log(test3, test3.willLikelySurvive());

// console.log(test.specimenNum,test2.specimenNum,test3.specimenNum);
// test.compareDNA(test2);
// console.log(test.dna);

