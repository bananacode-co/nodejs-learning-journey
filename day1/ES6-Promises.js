let done = true
//Function that return a Promise 
const isDone =()=> new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

//Example of resolving a promise on normal way
const procedure = ()=>{
    isDone()
    .then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}

//Example of resolving a promise with async,await
const asyncProcedure =async()=>{
    const done  =  await isDone();
    console.log(done)
}
procedure()
asyncProcedure()