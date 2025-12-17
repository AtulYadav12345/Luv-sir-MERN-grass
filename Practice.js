//------------------------------------------------------Loops---------------------------------------------------------
//Help to run code repeatedly until the condition met
//For
//While
//Do while
//For..in
//For..of




let Promis_chain1 = new Promise(function(Resolve,Reject){
        console.log("promisese is pending")
        setTimeout(()=>{
            console.log("This chain promise 1 is resolved")
            Resolve(true)
        }, 5000)
}).then((value) => {
    console.log("Now we are done")
    return 2
}).then((value)=>{
    setTimeout(() => {
        console.log("Ab pkka done ho gya")
        for(let i = 1; i <= 10; i++){
            setTimeout(()=>{
                console.log("Counting numbers",i)
            },2000)
        }
    },2000)
}).then((value)=>{
    setTimeout(()=>{
        for(let i = 1; i <= 10; i++){
            console.log(i,"* 5 =",i*5)
        }
    },5000)
})

// Promis_chain1.then((value)=>{
//     console.log(value)
//     let Promis_chain2 = new Promise(function(Resolve,Reject){
//         console.log("This Promis-chain is second promis and now pending")
//         setTimeout(function(){
//                console.log("Now this second promis of promise-chain is resolved")
//                Resolve(true)
//         },2000)
//     })
//     return Promis_chain2
//   })



setTimeout(() => {
    console.log("Hacking wifi..... Please wait......")
}, 1000);

try{
console.log(Atul) //kyoki Atul name ka variable defined nahi hai to yha ek error ayega "Atul not defined wala"
}
catch{ //ab iss catch ki vjh se js error show krke koi error ko represent krne wala word print krdegi
    console.log("Kyo a gya na error aye kya mje")
}

setTimeout(() => {
    console.log("Fetching username and Password..... Please wait......")
}, 2000);

setTimeout(() => {
    console.log("Hacking your's facebook id..... Please wait......")
}, 3000);

setTimeout(() => {
    console.log("Your Username and password fetched...... Please wait......")
}, 4000);



try{ //ab kyoki yha scheduled ya asynchronous code hai isliye bahr wala try catch kam nahi krega
    setTimeout(()=>{
        try{ //Scheduled/Asynchronous code ke particular block ke andr hi try catch ka code kam krega wrna nahi krega
          console.log(Atul)
        }
        catch{
            console.log("Error")
        }
    },0)
}
catch{
    console.log(error)
}

















































































































































