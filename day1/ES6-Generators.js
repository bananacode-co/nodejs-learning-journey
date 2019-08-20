

//Variables
const lifts = ['squat', 'bench', 'deadlift', 'press'];
const numWeeks = 3;
const daysPerWeek = 6;
const totalNumSessions = numWeeks * daysPerWeek;


//<--------------------Example without using generators------------------------------------------>
let currentLiftIndex = 0;

// This creates an empty array of totalNumSessions length
// for me to map over
const cycle = [...Array(totalNumSessions)].map(() => ({
    lift: lifts[currentLiftIndex++ % lifts.length]
}));

//<--------------------Example using generators------------------------------------------>
//If you are wondering why is not using arrow functios is beacuse arrow functions can't use yield neither generators.
function * repeatedArray(arr){
    let index = 0;
    while (true) {
      yield arr[index++ % arr.length];
    }
  }
    const nextLiftGenerator = repeatedArray(lifts);  
  // This creates an empty array of totalNumSessions length
  // for me to map over
    const cycle2 = [...Array(totalNumSessions)].map(() => ({
    lift: nextLiftGenerator.next().value,
    }));

    //Call to the objects
    console.log(cycle)
    console.log('<---------------------------------------------------------->')
    console.log(cycle2)
  