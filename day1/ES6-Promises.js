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
        console.log('1-->',res)
    }).catch(err=>{
        console.log(err)
    })
}

//Example of resolving a promise with async,await
const asyncProcedure =async()=>{
    const done  =  await isDone();
    console.log('2-->',done)
}

//Example on how to resolve multiple promises on a single function
const promiseAll=()=>{
    const done = [isDone(),isDone()]
    Promise.all(done).then(res=>{
        console.log('3-->',res)
    })

}
//Functions call
procedure()
asyncProcedure()
promiseAll()