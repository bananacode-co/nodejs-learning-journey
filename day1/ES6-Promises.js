let done = true

const isDone =()=> new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const procedure = ()=>{
    isDone()
    .then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}

const asyncProcedure =async()=>{
    const done  =  await isDone();
    console.log(done)
}
procedure()
asyncProcedure()