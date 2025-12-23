function sum(a,b){
    return a+b
}
console.log(sum(2,3))

//Modules
//kisi ek file ke function ko kisi alg file me access krne ke liye

module.exports = sum

const symfunct = require("./fuvtionfile") 

console.log(sumfun)