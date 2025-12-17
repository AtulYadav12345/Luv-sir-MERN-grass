// function  reversestring(inputstring) {
//     let result = ""
//     for (let i = inputstring.lenght-1 ; i >= 0; i--) {
//     result = result + inputstring[i]
//     }
//     return result
// }
// console.log(reversestring("Hello"))


function reversestring(inputstring) {
    let result = ""; //Yha pe ek khali string bnaya hai taki output value alg-alg na akr ek string me aye 
    for (let i = inputstring.length - 1; i >= 0; i--) { //yha pe reverse loop i ki value string ki length
        result = result + inputstring[i]; //isse jo outup ayega vo uss khali result name ke string me jayega
        // console.log(inputstring[i])
    }
    return result; //Return hmesha last value ko save kra ke uska output deta hai isliye yha direct "olleh" print hoga agr consol.log krte to alg-alg line me alg-alg hissa print hota hua last fully reverse value deta. phle "o" phir "ol" phir "oll" phir "olle" phir last me  "olleh" deta
}
console.log(reversestring("Hello"));




function reverseAstring (inputstring){
    let result = "";
    for(let i = inputstring.length-1; i >= 0; i--) //; //length ki spelling check krle "length" hoti hai for loop ke aage ; semicolon nahi lgana hai
    {
        result = result + inputstring[i];
    }
    return result;
}
console.log(reverseAstring("Atul"));
//Upr wale example me for loop me i>=0 wali condition btati hai ki jb tk i greater than or equal to  hai tb tk code run hoga aur jese hi i ki value -1 hogi loop bnd ho jayega kyoki condition false ho gayi.
//jisko me stop hone ki condition smj rha hu vo continue loop ko chlane ki coondition hai naki rukne ki uss conditon se bah nklne pr hi loop nd hoga    

function a (input){
    let data = "";
    for(let v = input.length-1; v >= 0; v--){
    data = data + input[v];
    }
    return data;        
}
console.log(a("Software"))



//Padrolimm 
function padrolimm88 (String99){
    return String99 === String99.split("").reverse().join("")
}
console.log(padrolimm88("madam"));
console.log(padrolimm88("Hello"));




//block me function bnayenge to use hm function scope kh skte hai 
console.log("-------------------Palindrom-------------------------------")

function padrolimm88 (String99){
    return String99 === String99.toString().split("").reverse().join("")
}
console.log(padrolimm88("madam"));
console.log(padrolimm88("Hello"));
console.log(padrolimm88(101));
// let g66 = 101;
// console.log(g66.typeco)
// console.log(padrolimm88(g66));




//Type conversion
let Typer_conversiona1 = 101;
console.log(Typer_conversiona1.toString());

let Type2a = Typer_conversiona1.toString();

console.log(Type2a);
console.log(typeof(Type2a));

let ul = Type2a.split("").reverse().join("");
console.log(ul);

console.log(typeof(ul));

console.log(ul == Typer_conversiona1);





//Multiple of 5 and 3 loop
for(r1 = 1; r1 <= 10; r1++){
        let r2 = r1 * 5
        let r3 = r1 * 3
    console.log("Multiple of 5 are", r2 ,"  And   Multiple of 3 is",r3);
}


//Assignment Question-1
console.log(false =="0"); //Output True kyoki yha sirf value dekhega datatyoe nahi
console.log(false ==="0"); //Output False kyoki yha value ke sath datatype bhi dekhega


//Assignment Question-6 / Assignment Question-7
(function(){
    var a = b = 3;
})()

console.log("a defined " + (typeof(a) !== "undefined")) //Output true
console.log("b defined " + (typeof(a) !== "undefined")) //Output true


//Assignment Question-8
console.log(0.1 + 0.2); //My Output 0.300000000000000
console.log(0.1 + 0.2 == 0.3); //My Output False


//Assignment Question-10

console.log(1 + "2" + 2);
console.log(1 + +"2" + 2);
console.log(1 + -"1" + 2);
console.log(+"1" + "1" + 2);
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);


//Assignment Question-11
console.log("0 || 1 =" +(0 || 1)); //Output true
console.log("0 || 1 =" +(1 || 2)); //Output True
console.log("0 || 1 =" +(0 && 1));//Output true
console.log("0 || 1 =" +(1 && 2));//Ouput True




// console.log(typeof(Typer_conversiona1.toString));





// for (n = 1; n % 5; )



//Timer Function 
//setTimeout, setInterval

// console.log("setInterval")
// setInterval(()=>{
//     console.log("Inside set interval Function")
// },5000) //every 5 second 

//ctrl+c to stop this function

console.log("1")
console.log("1")

setTimeout(()=>{ //Ye asynchronous code hota hai
     console.log("Inside setTimeout Function")
},3000);
// },0);

console.log("2")
//Kitne bhi synchronous code dedo but ye phle synchronous code ko hi execute krega aur un sbke code ko execute krne ke baad fir asynchronous code ko execute krega

//agr 2000 synchronous code he to  



 











































































































































































































































































































































































































































































































































































































































































































