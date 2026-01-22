//Node.js is a javascript runtime environment 
// *Node.js is not an javascript framework or librart 
//mtlb node.js koi framework ya library nahi hai bs ek Runtime environment hai jo chrome ke v8 engine ki trh bina internet ke offline local device pe chl skta hai
//Node.js ko "Ryan dahl" ne v8 engine vale feature co c++ ke sath ek package me dalkr local offline access krne ke liye bnaya tha 
//NodeJS install krte vkt jo LTS(Longterm support) version hota hai usme koi bug nahi hota hmesha use hi download krna chahiye production ke liye aur LTS version ka number hmesha even number se start hota hai jese 18.12.1 ye Long term support wala hoga 
    //Aur jo bhi version odd number se start hota hai vo version current version hota hai jisme kuch bugs ho skte hai just test ke liye uska use hota hai example 19.3.0 ye current version hai
//NodeJS ka version dekhne ke liye hm command prompt me jakr node --version likhenge to hme hmare device me node js ka konsa version iske bare me pta chle jayega

//---------------------------------------------------NPM---------------------------------------------------
//1).NodeJs ke sathme NPM (node package manager) bhi aata hai
//2).We use npm -v in command prompt to see the npm version which installed in our local device
//3).Kyoki NodeJs ka kam local device pe hai isliye isme DOM nahi hai node.js me jo commands browser ke v8 engine pe run hoti hai DOM se related vo same to same nodeJs pe run nahi hogi
//4).Jb bhi hm koi project bnayenge tb hm Npm init bhi krenge mtlbe node package manager initialization ye ek file bnayeg jo iska meta data apne andr rkhega
//5).NPM ka use krke hm javascript me kisi aur developer dwara bnaye hue functions ke thousand of lines ke code ki files jinko hm package khte hai unko access kr skte hai hme utna code khudse nahi likhna pdega vo ek reusable code hota hai
//6).NPM ke through hm packages ko install, manage and Javascript me use kr skte hai
//7).NPM hme ready made-code deta hai sara code shuru se nahi likhna pdta isse time bchta hai
//8).NPM ek "package.json" name ki file bnata hai jisme ye project ki details, installed packages, scripts to run the projects ko rkhta hai
//9)node_modules name se ek folder bnta hai jisme sare NPM ke install kre hua packages ko rkha jata hai
//10)npm install command se hm packages ko install kr skte hai


//--------Npm init
//Jese hi hm npm init command likh kr enter dbayenge ye meta data dega file ke bare 
//fir ek package.json name se new file create kedega ye ek trh ki configuration file hogi
//Iss file se hm ye decide kr skte hai ki hmari project file behave kese kregi yha configuration ek trh ki settings and rules hota hai file ke code ko execute krne ke liye 


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