//Default parameters
//Mtlb agr do se jyada parameters hai aur sum function ya kisi function me me unka use hm nahi krenge to unko ek default value dena jaruri hota hai isse jb bhi hm unka use nahi krenge tb koi error nahi ayega aur esa nahi kiya to Nan(Not a number) ayega 
//Parameters functions ke variable 
function sum(a = 0,b = 0,c = 0,d = 0){
    return a+b+c+d
}
console.log(sum(4,4,7))
//Nan

function sub(a = 0,b = 0,c = 0,d = 0){
    return a*b
}
console.log(sub(2,3))



//Modules
//kisi ek file ke function ko kisi alg file me access krne ke liye ese export krte hai aur fir usko kisi dusri file me require(./Filepath) se access kr skte hai
//Dusri file ma access krne ke liye ek nya variable bnakr usme require(./Filepath) dena hoga
//Fir jis function ko call krne ke liye uss variable ko jo hmne bnaya hai use call krna pdega 
//example variable = require(./Filepath)
// console.log(variable(2,3))
//Aur agr multiple functions hai to unhe fucntions wali file me hi ek object bnakr usme dalna pdega fir un multiple functions me se particular function ko call krne ke liye hm .notation ka use krenge 
//example 
// module.exports = {sum, sub} //Multiple functions export krne ke liye
//let variable = require(./filepath)
//console.log(variable.sum(2,3))
//console.log(variable.sub(4,6))


//module.exports = sum
//variable.notation se object ke andr ke particular function ko hum access 

//const symfunct = require("./fuvtionfile") 

//console.log(sumfun)

//Modules/Packakges
//User-defined, Internal, External

//What is Dstructure
//Async Await, Promises
//Functions 