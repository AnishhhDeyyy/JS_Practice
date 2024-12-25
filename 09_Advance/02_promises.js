const promiseCreate = new Promise(function(resolve,reject){   // promise creation
    setTimeout(function(){
        console.log("Async1 completed");
        resolve()
        
    },2000)
})

promiseCreate.then(function(){  // it will always call after promise creation completed
    console.log("Promise Consumed")
})

// Another Way To Write this
new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("Async2 Completed")
      resolve()
    },2000)
  
}).then(function(){
    console.log("Promise2 Consumed")
})
// Print User Name
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Anish",email:"anishdey400@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user)
})
// Rejection Checking
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = false
       if(!error){
        resolve({userName:"ANish",password:"123"})
       }else{
        reject('Error: SOmething went wrong')
       }
    },1000)
})

promise4
.then((user)=>{
   console.log(user);
   return user.userName
})
.then((userName)=>{
    console.log(userName);
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("The Promise is either resolved or rejected")
})

// Async and Await

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
         resolve({userName:"JavaScript",password:"123"})
        }else{
         reject('Error: JS went wrong')
        }
     },1000)
})

async function consumePromiseFive() {
    try{
    const response = await promise5
    console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}

consumePromiseFive()
