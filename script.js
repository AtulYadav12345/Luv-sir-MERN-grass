// ctrl + f   (This shortcut key used to search any word by typing their name )
// "js is a interpreter language and also called just in time language 
// Javascript invented by Brendan Eich in 1995(webpage ko interactive and dynamic bnane ke liye iska invention kiya tha
// Ryan dahl-who created node.js
// Javascript initially called Mocha, then LiveScript and then it called javascript
//  - interpreter are those who turn our language in computer readable language line by line but on the other hand compiler compile full code of the page in one Time Ranges -> Js is both interpreter and compiler language"
//  'Js is both scripting and progrmming language'
//  'Js is a synchronous language- metlb pehle sbse pehli line ko interpret krega phir dusri code line pe jayega vrna nahi jayega line by line execute krega 1st line ka code execute hoga tbhi age ke code execute honge
//  Js synchronous by default hoti hai'
//  'Js is a single threaded - '
//  'Asynchronous - ye nature hm dete js ko,isme hm synchronuos nature ko change krdete hai mtlb isme jis bhi code ko execute krne me sbse km time lgega usko sbse pehle execute krega fir baki jyada '
// Dynamic aur intractive website bnane me js kam aati hai 
// script ko html me body element me sbse last me isliye lgate hai kyoki pehle pure html and css ki file render krna pdega uske baad js uspe apply hogi isliye taki css pehle apply ho html pr phir js apply ho isliye js script tag ko Html ki body tag ke last me dete hai
// hr variable ko ek memory milti hai
// Two types of datatype
//  1.primitive datatype - pehle se js apne aap jo datatype dedeti hai
// 2. Non-primitive- jo datatype hm khud dete hai exapmle- null, object, array, functions
// Bit - A bit is the smallest unit of data in computing. Bit = 0 or 1
// Byte - A byte is a group of 8 bits. 1 Byte = 8 Bits
// let a=3 //ye let ek variable hai jo ek named data/value container(memory block) hota hai
// let b=4
// let c = a+b
// console.log(c)
// Primitive Datatypes - 
// 1).number - used for number, numerical value , also for decimels like 1.2(float)
// 2).string - text ka use hota hai "" inke undr string ke text ko likha jata hai
// 3).Boolean - true,false
// 4).undefined - Variable bnaya but usme koi value nahi di to ye variable undefind khlayega 
// 5).null - null ko ek value bhi mana jata hai ye null value hoti hai jo kisi kam ki nahi hoti.
// 6).Symbol (ES6) - Used to create unique identifiers // #Example: let s = Symbol("id");
// 7).BigInt (ES2020) - For very large integers // #Example: let big = 12345678901234567890n;
/**
//1). Programming Language (General Term)
A programming language is any language used to write instructions that a computer can execute.
Characteristics
Can build full applications, operating systems, games, drivers, etc.
Often compiled to machine code (but not always).
Gives more control over hardware and memory (in many cases).
Examples
C,C++,Java,Rust,Go

//2). Scripting Language (Specialized Type)
A scripting language is a programming language designed mainly to automate tasks, control other software, or glue components together.
Characteristics
Usually interpreted, not compiled.
Runs inside another program or environment (browser, shell, runtime).
Faster to write and modify, but often slower to execute.
Less direct control over hardware.
Examples
Python,JavaScript, PHP, Bash, Ruby

3. Key Differences (Side-by-Side)
Aspect	    Programming Language	Scripting Language

Definition	          Broad category	                               Subset of programming languages
Execution	          Often compiled	                                  Usually interpreted
Use case	          Large systems, apps	Automation,                   web, glue code
Performance	          Generally faster	                                  Generally slower
Development speed	  Slower	                                          Faster
Hardware control	  More control	                                      Less control 
---

4. Important Reality Check ⚠
The distinction is not strict anymore:
Python (a “scripting language”) is used for large systems, AI, and servers.
JavaScript runs entire applications (frontend & backend).
Many “programming languages” also have interpreters.
👉 Today, the difference is mostly historical and contextual, not technical.

---

5. Simple Analogy
Programming language: Building a car from scratch.
Scripting language: Writing instructions to drive the car automatically.
 */

//Non-Primitive Datatypes
// 1).Object
// 2).Array
// 3).Function

// important question- difference between Undefined and null 
// Answer. undefined datatype me apn future ma value dal skte pr null dene ka mtlb js ye smjhe ga ki vo value/variable future ma koi value nahi di jayegi vo kisi kamka nahi hai. 
// Null aur object dono ki  value 0 hoti hai isliye null ko object type kh skte hai ye ek error tha 
// Js work on chrome Runtime environment called v8-engine
// node -v
// ls - to see all folder
// cd foldername
// node script.js(file name)
// object ka use kese krte hai
// primitive and non-primitive pdna hai
// operators
// modulus % ,devide

//  Homework - Operators  

//1.Arithmetic operators
// +, -, *, /, %, ++, --
//++ directly kisi number pe iska use javascript me nahi kr skte (++1 ye galat hoga) (a = 1 ++a ye sahi mana jayega javascript me)

//2.comparision operators
// >, <, >=, <=, ==, ===, !==, !=
// Iska output hmesha boolean ke true , false me hi ayega
//== sirf value dekhta hai   (example 5 == "5")
//=== ye value and datatype dono dekhta hai
// != not equal to




// 3.Assignment operators
/*
=	Assign value
+=	Add & assign           x += y   x = x + Y
-=	Subtract & assign      x -= y   x = x - Y
*=	Multiply & assign      x *= y   x = x * Y
/=	Divide & assign        x /= y   x = x / Y
%=	Modulo & assign        x %= y   x = x % Y
**=	Exponent & assign      x **= y   x = x ** Y     (3 ** 2 → 3² → 9) mtlb ye power deta hai
&=	Bitwise AND & assign   x &= y   x = x & Y    (& - And)
|=	Bitwise OR & assign    x |= y   x = x | Y    (| - OR)
^=	Bitwise XOR & assign   x ^= y  x = x ^ y     (^ - bit related)
/*
✅ What XOR (^) does

XOR compares the bits of two numbers:

Bit of x	Bit of y	Result (XOR)
0	           0	      0
0	           1	      1
1	           0	      1
1	           1	      0 
*//*
<<=	Left shift & assign    x <<= y  x = x << y
*/
a = "70";
console.log(typeof a);
b = 70;
console.log(a==b); 

// == (equal) ye sirf value ko compare krega but datatype pe focus nahi krega
//  === (Strict equality operator) isme value and datatype dono ko compare kiya jata hai aur value aur datatype me se koi ek bhi equal nahi ho to false btayega  


//4.Logical operators
// &&, ||, !
// && - And 
// || - OR
// !  - Not
// True && false //output False
// True && True  //output True
// True && false //output False
// False && True //output False
// False && False //output False
c = 9 //True
console.log(c)
console.log(!c) //False

d = 0 //False
console.log(d)
console.log(!d)//True

e = "0" //True
console.log(!e) //False

f = undefined; //False because undefined value is 0
console.log(!f) //True

a1 = 2
b1 = 3
console.log(a1,b1)
console.log(a1/=b1)

a2 = -2 //True - Minus values are also Consider as True 
console.log(-2)
console.log(!a2)

a3 = 0.5 //True 
console.log(a3)
console.log(!a3)

let a4 = [null]; // Array ke andr koi bhi value rkho total array ko true hi consider krengee
console.log(a4);
console.log(!a4);

// 0 ke alava sari value True hi mani jayegi

//5).Ternary (Conditional) Operator 
//Shorthand for if else.
//let result = (age >= 18) ? "Adult" : "Minor";
//let age = 15;
//let result = (age >= 18) ? "Adult" : "Minor";
//console.log(result)       // True     False       //output Minor

//6).Spread operator (.....)
//7).Type operator - typeof()
 


//--------------------------------- Variables----------------------------------
//Function declaration hoisting ko support krta hai
//Function expression hoisting ko support nahi krta hai

//Null value wala variable 4 bytes occupy krta hai
//Undefined value wala variable 4 bytes occupy krta hai



// let a4 = 90; //same name wale let variable ko bar-bar define nahi kr skte hai but value change kr skte hai
console.log(a4);

{
    var a5 = 90;
    console.log(a5)
    var a5 = 98;
    console.log(a5);
}

// Difference between var , let , const is
// Hoisting - isme
console.log(a6); //Var variable me bina value assign kre hm console.log se print kre to error show nahi hoga but undefined show krega
var a6 = 80;
console.log(a6);

// console.log(a7); //Isme error dedega kyoki value assign kre bina apn ne console.log se let variable ki value print krane ki koshish ki hai.
let a7 = 95;
console.log(a7); //but ab value assign krne ke baad me apn value print kra skte hai isme koi error nahi dega 
// Const ma bhi same hoga

// variable declaration - 
let declaration;

//Initializaton 
let Initializaton = 4; //Value assign krna Initializtion khlata hai

console.log("Learning")


let city = "Jp"

console.log(city); //output Jp

city = "Banglore" 

console.log(city); //output Banglore

// const me value undefined nahi kr skte.
// const u;       (error show krega)
// console.log(u); 

//        Variable-name       Variable-Value
//         Redeclare    Scope   Reassign  version                   Hoisting
// let      no          Block     yes     ES6-2015 (Ecma script )   No/Temporal dead zone
// const    no          Block     no      ES6-2015                  No/Temporal dead zone
// var      yes         Global    yes     Starting with This        Support/Show undefined
//                     Function

//Global variables let, const, var ko kahi pr bhi access kr skte hai even alg-alg block me bhi but block vale let and const variables ko sirf uss block element me access kr skte hai.

// Ecma script - Refer to rules and regulations about Javascript kyoki starting me sare browsers ki js alg-alg thi but in sbko ek same rules and regulations dene ke liye Ecma Script ko bnaya gya tha , ecma script 2009 me start hui thi.


// Var variable ko bina upr vali line ke 

console.log(a8);
var a8 = "Before"; //Output Undefined 

// console.log(a9);
// let a9 = "After" //Output Error

// console.log(a10);
// const a10 = "After"//Output Error



// TDZ -> Temporal daed zone
// Temporal dead zone (TDZ) let aur const me hota hai var me nahi kyoki var hoisting ko support krta hai aur hoisting let and const ko support nahi krta hai.
//Hoisting ki vjh se Variable declare krne se phle usko print krayenge to let aur const me error dega kyoki vo ek Temporal dead Zone TDZ  me aa jayenge kyoki unko javascript declare nahi kregi




//-----------------------------------------------Loops-----------------------------------------------------

// There are five types of Loops
// for
// do..while
// while
// for..in
// for..of-

// Loop - execute a piece of code again and again
a11 = "Hello"
// console.log(a11*5);


//----------------------------------------------For loop
//3parts For loops
//Initialization : starting point
//Condition : Loop run until this condition met(True)
//AfterThought/Updation : Expression to run after each iteration

//yha pr loop tb tk kam krega jb tk condition me i ki value 10 se km ho ya 10 ke equal ho jb i ki value 10 se jyada ho jayegi tb ye loop ruk jayega kyoki vha pe puri condition ab false ho gayi hai mtlb ab i 10 se chota ya equal nahi rha isliye loop ruk jayega
for(let i = 1; i <= 10; i++){
    console.log("I is",i);
    // return i;
};

for (let i = 1; i<=5; i++){
    console.log("Ay");
}
console.log("Now loop ended");



// let i = 1; ye loop ko start krega/ Initialization
// i <= 5 loop kha pe stop hoga / Stoping condition / Jb tk ye condition hai tb tk loop chlega
// i++ isme jo updation hoga jo add hoga
// Jitni bar bhi stoping condition true hogi tb tk for loop kam krta rhega aur false hogi tb ruk jayega
// What exactly happened in above code is
                                    //  i = 1    1<=5  true
                                    //  i = 2    2<=5  true
                                    //  i = 3    3<=5  true
                                    //  i = 4    4<=5  true
                                    //  i = 5    5<=5  true
                                    //  i = 6    6<=5  false  ab loop se bahr ajayenge 

 
 for( let h = 1; h <= 10; h++){
    console.log("This country is india")
 }
 
 
 //Calculate sum of 1 to 5
 let sum9 = 0;
 for ( h1a = 1; h1a <= 6; h1a++){
    sum9 = sum9 + h1a; 
    console.log("sum9 = ",sum9);
 }
 console.log("sum9 = ", sum9);
 console.log("Now this calculation of sum is also ended");

//  Ye Caculation hm ese bhi kr skte hai
let sum8 = 0;
n = 10;
for (let f1a = 1; f1a <= n; f1a++){
    sum8 = sum8 + f1a;
    console.log("Sum8 = ",sum8);
}
//Isme first condition me f1a = 1 and f1a++ hone ke bavjud phli value 1 isliye print ho rahi hai kyoki     f1a++ post increment ho rha hai isliye aur post increment me pehli bar without increment value print hoti hai fir dusri bar me uska asr dikhta hai 
console.log("In this we added n variable which we already given a value");


for(let m = 1; m <= 50; m++){
    console.log("This is m", m)
}

for(let g = 50; g <= 100; g++){
    console.log("This is g",g);
}

for(let h = 1; h<=10; h++){
    console.log("This is Multiplication of h and 2 is",h*2 )
}

for(let r = 1; r <= 15; r +=2){
    console.log("Odd numbers are",r)
}

for(let w = 2; w <= 20; w +=2){
    console.log("Even numbers are",w)
}

console.log("  gape   ")
console.log("  gape  ")
console.log("  gape   ")
for(let c = 1; c <= 10; c += 2){
    // for(v = 2; v <= 10; v +=2)
    // console.log("Thes are even numbers",c,"These are even number",v,"These are total of both",c+v)
    console.log("Thes are Odd numbers",c)
}

for(let k = 2; k <= 20; k += 2 ){
    console.log("These are even number",k)
}

for(let f = 10; f >= 1; f--){
    console.log("Up to Down",f)
}

for(let a1 = 1; a1 <= 10; a1++){
    console.log("Multiple of 5 is",a1*5)
}

//-------------------------------Array For loop
let Array_Num = [345,675,654,876,898];
for(let i = 0; i<8; i++){
    console.log(Array_Num[i])
}

let For_num1 = [456,234,245,"ertg","Earth"]
for(let i = 0; i < For_num1.length; i++){
    console.log(For_num1[i])
};


let member7 = "Uncle"; 
let member8 = "Aunty"; 
// let Family56 = [122,133,"Father","Mother","Grandfather","Grandmother","Brother","Sister"]

let Family56a = ["Father","Mother","Grandfather","Grandmother","Brother","Sister",member7,member8]
for(let i = 0; i < Family56a.length; i++){
    console.log(Family56a[i]);
}

let rr6 = [234,456,789,987,654,432];
for(let i=0; i < rr6.length; i++){
    console.log(rr6[i]);
}

//----------------String For loop
let Name1d = "Atul yadav"
for(let i = 0; i <= Name1d.length-1; i++){
    console.log(Name1d[i]);
}

let Name1e = "Atul yadav"
for(let i = 0; i <= Name1e.length; i++){ //kyuki index number 0 se start hota hai isliye ye bina leng,
    console.log(Name1e[i]);
}

//Array ki value ko ulta print krane ke iss loop ka use hoga

for(let i = Name1e.length; i >= 0; i--){
    console.log(Name1e[i]);
}

//------------------------Multiple For loops in one loop
for(let i = 1; i <= 10; i++){
    for(j = 1; j <= 10; j++){
        // console.log(i*j); //isse 1,2,3,4,5,6,7,8,9,10 ki tables print ho jayegi  
        
    }
    console.log("------------------")
    // console.log(i*J);  //yha pr j se error show krega kyoki j only usi loop me kam krega jisme kam kr rha hai
}
//Multiple loops me sbse bahr wala parent loop hm uss loop me sare child loop me access kr skte hai but child loop parent loop me access nahi kr skte hai

for(let i = 1; i <= 10; i++){
    console.log(i*i);
}


let sum10 = 0;
for(let i = 0; i <= 10; i++){
    sum10 = sum10 + i
   console.log(sum10)
}
console.log(sum10);



//------------------------------------------While loop

let Hum9 = 1;
while ( Hum9<=5){
    console.log("This is while loop",Hum9);
    Hum9++
} 
console.log("While loop ended");

let b2 = 20;
while (b2 <= 15){
    console.log("Hello world");
    b2++
}
//Iss while loop me hmesha jis variable pe condition aur updation hoga use hmesha while ke phle wali line declare aur value assign krni pdegi andr nahi kr skte aur niche ki side bahr bhi nahi kr skte



//--------------------------------------Conditiional Statements--------------------------------------------
// if
// else if
// else
// switch    

// if(condition){
//     condition == true;
// }
// else{ 
//     condition == false
// }

let age = 17;

if(age>=18){
    console.log("You can vote")
}
else{
    console.log("You cannot vote")
}


// Multiple conditions ke liye hm else if use krenge aur single conditions ke liye hm if else use krenge only.

let marks = 85

if(marks >= 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if( marks >= 35){
    console.log("Fail")
}
else{
    console.log("Invalid marks")
}

let english = 50
let hindi = 50

// Nested if else
let attendence = 75
if(attendence>=75){
    if(english >= 50 && hindi >= 50 ){
        console.log("Eligible and Passed")
    }
    else{ console.log("Eligible but not passed")}
}    
else{
    console.log("Not eligible")
}


let day = 5;
switch(day){
    case 1:console.log("monday")
    break;
    case 2:console.log("Tuesday")
    break;
    case 3:console.log("Wednesday")
    break;
    case 4:console.log("Thursday")
    break;
    case 5:console.log("Friday")
    break; //Break ke bina agle case ko bhi print kra deta break in conditions ke bich me difference ke liye use kiya jata hai
    case 6:console.log("Saturday")
    break;
    case 7:console.log("sunday")
    break;
    default: console.log("Invalid day")
}



//----------------------------PRE-Post incriment learning
console.log("Pre-Post_Increment and Decrement");
let a12 = 5;
let a12b = ++a12 ;
console.log(a12); //Output 6
console.log(a12b); //Output 5
let a12b1 = a12++ ;
console.log(a12); //Output 7
console.log(a12b1); //Output 6
//Direct number pe pre and post increment decreament use nahi kr skte hai 
// 1++ ,++1, --1, 1--   ye sb error denge  a = 1 ++a, a++, --a, a-- ye hi sahi hoga


let a13 = 5;
let a14 = 5;
let a15 = 5; 



i1 = 10;
for( i1; i1>=1; i1--){ 
    console.log(i1,"Hello world")
}




//-----------------------------------------------------Function----------------------------------------------------------

//Function declaration hoisting ko support krta hai
//Function expression hoisting ko support nahi krta hai

//Function is a reusable code
//Same code ko bar-bar nahi likhna pdta bs ek bar ek function bna lo aur usko invoke krke value dekr kam kra skte hai repeated task ke liye use hota hai
//Parameters - variable : Function ke andr jitne bhi local variables honge unhe hm parameters khenge 
//Arguement - Values/data jo variable ko di gayi value hogi vo function ke arguements khlayegi
//Jb tk hm function ko invoke ya invoketion/call nahi krenge tb tk function bs yu hi pda rhega aur koi kam nahi krega hr function ko invoke to krna hi pdega
//Parameters take input → function processes → return gives output

/*
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
*/

function Totalling88 (x,y){
    return((x+y)/2);
}

//Iss upr wale code me Totalling88 (x,y) isme ye x,y ye dono parameters hai ek trh ke local variables hai

Totalling88 (4,5); //Function invoketion - Mtlb function ko call krna
                   //yha pe jo value hmne function ke variable ko di hai inko hm "Arguements" khte hai function


console.log("Average of the numbers is : ",Totalling88 (10,10));
console.log("Average of the numbers is : ",Totalling88 (20,20));
console.log("Average of the numbers is : ",Totalling88 (40,40));




//------------------------------------Difference between Normal function and Arrow function
//Normal function
/**
let obj = {
  name: "Atul",
  greet: function () {
    console.log(this.name);
  }
};
obj.greet(); // Atul 
//Normal function object methods me this ka use kr paata hai but Arrow function nahi kr paata
 */
//Arrow function
/**
 let obj = {
  name: "Atul",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet(); // undefined
 */
//Arrow functions should NOT be used as object methods.
//Normal function object methods me this ka use kr paata hai but Arrow function nahi kr paata



//Arrow Funtion
// Arrow functions are shorter and do not have their own this, while normal functions have their own this and support constructors and arguments.

console.log("Arrow Function is there for you")
const Arrow889 = (u,t) => {
    console.log("Hello kesa hai. me to thik hu tu bta");
    // return(u+t);
}
// Ye jo above code hai ye arrow function hai mtlb function ke syntax ko short form me ese likh skte hai isse same hi kam krega, yha pe  =>  ye function ki jgh apn use kr lete hai 


let v = Arrow889(2,3);
console.log(v);


console.log("Function")
//Function formula

//Function create krna 
//-------------------------------------Function Declaration/Normal Function
function Total (a,b) {
    console.log(a+b);    
}
//A function that is defined using the function keyword with a function name.
//Function declaration Hoisting ko support krta hai
//Function ko bina define kre call kr skte hai
// Key Characteristics
// Hoisted completely (function + body)
// Can be called before it is defined
// Has a fixed name
// Commonly used for reusable logic


sayHi();   // Works due to hoisting //This code showing that function declaration support hoisting 

function sayHi() {
    console.log("Hi!");
}
  



//Function invoke krna 
Total(2,3); //Yha argument dekr function ko call kr rha hai
Total("atul","yadav")
Total(a13,a14)

a13 = 5;
a14 = 7;

//---------------------------------------Function expression 
//variable ke andr function ko dalna
let express = function(){

}


//-----------------------------------------  Arrow function
// => Arrow function ko declare krne ke liye use hota hai
//bs ye thoda short formula hota function ko likhne ka jisko hm arrow function khe hai
let subt = (a,b) => {
    console.log(a-b);
}
subt(5,4)



//Return related function
function hello (a,b){
    cn = (a + b);
    return cn; 
}
hello(5,6)
console.log(cn)


//variable = Parameters
//Values = arguement

//Return ka jb bhi use krte hai tb usko alg se ek variable me dekr print bhi krana pdega uske bina Vo bilkul bhi print nahi krega kyoki vo sum hone ke bavjud variable me save ho jayega aur us variable ko print krane pr hi hme return output value milegi 

// console.log only prints once.
// return allows the value to be used many times anywhere.


console.log("Doubt Functions");
function RT (Q,V){
    let v2 = Q+V
    // return v2
};

v2 = RT(2,2)
RT(2,2); //isme Output nahi ayega kyoki yha Q+V perform to ho gya but vo jakr v2 variable me save ho gya aur iss vjh se jb tk hm v2 variable ko print nahi krayenge tb tk hme output me value nahi milegi
console.log(v2);


console.log("Doubt related difference between return and console.log")

let multiplication = function (a,b){
    console.log(a*b) //Ye andr wala console.log hai
     //1 line ke code me ek bar hi print krege bina return keyword ke dusri line ko alg manega 
    // return a*b // return keyword hoga to kitni bhi bar print kra skte hai bs ek variable me value deni pdegi
}

console.log(multiplication(2,5)); //hr bar isne pehle function wale console.log ki value print krai fir inn console.log ki value print krai
console.log(multiplication(2,5));
console.log(multiplication(2,5));
console.log(multiplication(2,2));

let s = multiplication(2,3);
console.log(s);

//output :
// 10             //Pehla console.log Function ke under wala
// undefined      //Dusra consol.log function ke bahr wala 
// 10             //Pehla console.log Function ke under wala
// undefined      //Dusra consol.log function ke bahr wala
// 10             //Pehla console.log Function ke under wala
// undefined      //Dusra consol.log function ke bahr wala
// 4              //Pehla console.log Function ke under wala
// undefined      //Dusra consol.log function ke bahr wala

//console.log sirf 1 baar print krayega isliye above code already jb function run hua tb pehli baar me console.log kam kr gya but jb second time bahr wale console.log pe aya tb undefined show krne lg gya kyoki function already 1 bar execute aur print ho chuka hai aur wapis use kerne ke liye return nahi hai iss wjh se second wale console.log ko javascript ne khali smjha aur isme me undefined show kiya



// let multiplication = function (a,b){
//     console.log(a*b) //Ye andr wala console.log hai
//     return a*b
//     }
//console.log(multiplication(2,5)); //Isko javascript bahr wala console.log man rahi hai
//ye jo code mene upr use kiya hai isme javascript 2 console.log ko smj rahi hai ek to function ke andr wala aur dusra bahr wala console.log
//Aur kyoki console.log sirf upr-upr print krke show krta hai isliye ye sirf ekbar kam krega aur javascript dusre wala console.log me smj nahi payegi ki kya perform krna hai agr return hota to vo javascript ko save kri hui value ke dwara bta deta ki kya krna hai aur output undefined ki jgh execute hokr aata 

//example ke liye
console.log("Doubt-solution-example")
let sum67 = function (a,b) {
    // console.log(a+b);
    return(a+b);
}
console.log(sum67(2,2));

// v3 = sum67;  //Output [Function: sum67] //mtlb upr sum67 ko console.log me value dene ka bad bhi isme jo sum hua usme vo value use nahi hui
v3 = sum67(5,5);
console.log(v3);


let div = (n,m) => n/m  // Isme bina return likhe bhi value return krega ye directreturn krega
console.log(div(10,2));
 
vr = div(20,2)
console.log(vr)

let multiply787 = function(a,b,C=2){
    // console.log(a,b,c);
    return a*b*C   //return statement hmesha last me hi ayega iske baad likha gya koi bhi code function me kam nahi krega    
}

console.log(multiply787(2,2,2)); //function nayi di hui value jyada value dega



//3).Higher order function
//12).Map()   //Important for interview
//Also called higher order function HOF,
/*console.log("Map-related");
let mapRelated65 = [1,2,3,4,5,6,7,8];
let squar55 = mapRelated65.map((Number77,index)=>{
    let sqnum87 = Number77*Number77
    console.log("square-number: ",sqnum87,"index-number: ",index)
});
console.log(squar55);*/
//kisi aur function Parameter ke andr wala function Callback function hota hai
//Jo function apne function ke parameter ke andr koi aur function ko dalta hai use hm Higher order function khte hai
//Sare elements pe eksath koi function use krne ke liye use hoga.
//Isse hm eksath array ki sari values pr koi bhi arithemetic prform kr skte hai jese multiplication and devision 
//Yha pr ye index predefined hai 



//4).IIFE --> -----------------------------------Immeditely invoked function expression
/*(function (){
    console.log("Inside life")
})();*/







//-------------------------------------------------------Array-----------------------------------------------------------
//Array non-primitive datatype hota hai
//Array ka type object hai
//Array me lenght 1 se start hoti hai  1,2,3,4,5,6 ("Total element/data/value ka numbers")
//Array me index position 0 se start hoti hai 0,1,2,3,4,5,6 (Index positions/address)

// collection of similar elements or same datatypes contain data which related to each other in any way
let arr55 = [1,2,3,4,5,6];

//--------------------------Predefined Arrays property and methods

console.log(arr55.length); // ye btata hai ki array me kitne element hai 

//push, pop, shift, unshift
arr55.push(5)  // Isse array ke elements last me ek nya element joda ja sktaahai
console.log(arr55)

//---------------------------Array position/Array address
// Array me hr element ko ek position ya index position/address  milti hai jo 0 se start hoti hai
console.log(arr55[0]) //0 index/address output 1
console.log(arr55[1]) //1 index/address output 2
console.log(arr55[2]) //2 index/address output 3

console.log(arr55.length);
let n2 = arr55.length
console.log(n2);

console.log(arr55[n2-1]); //isse hm kisi bhi element ka index number ya address nikal skte hai n2 me hmne array arr55.length se uski length me se 1 minus krke output nikala hai 
// //Mtlb 6-1 = 5 to 5 index number wali value(jo hai 6) bta dega iss hm kisi bhi value ka address jan skte hai 

let mark_class_12 = [40,50,60.70,75,80]
console.log(typeof(mark_class_12)); //output Object
console.log(mark_class_12);

let marks_class_12b = [40,50,60,"absent",null,75]; //mtlb alg-alg trh ke datatypes ke data/value ko array me dal skte hai
console.log(marks_class_12b);
console.log(marks_class_12b[0]);  // Ye array ke elements ke index positions/address hai jinse hm particular index position ka element ko print delete add kr skte hai
console.log(marks_class_12b[1]);
console.log(marks_class_12b[2]);
console.log(marks_class_12b[3]);
console.log(marks_class_12b[4]);
console.log(marks_class_12b[5]);
console.log(marks_class_12b[6]); //Output undefined kyoki 6th position pe koi element/value/data hi nahi hai vo ek trh se undefined value hi dega
//Array me index positions/address hmesha 0 se start hota hai

console.log(marks_class_12b.length); //ye lenght btata hai ki array me total kitne elements hai

marks_class_12b[3] = "Not present"  //yha pe hm array ke element/data ko change kr rhe ha
console.log(marks_class_12b);
marks_class_12b[6] = "Added element1" //yha pe hm array me nya element add kr rhe hai nye index number ke sath
console.log(marks_class_12b);

//#Question imp
//Strings -> immutable(index pe jakr element ki value change nahi kr skte)
let str = "Hello";
str[0] = "h";     // trying to change the first character
console.log(str); // "Hello"  → no change

//Array -> mutable(index pe jakr element ki value change kr skte hai)


//------------------------------Array methods

//1).Push() : Use to add something in the last of the array
//-> ye original array me change krta hai
let list2 = ["potato","apple","Litchi","Tomato"] 
list2.push("Added food item");
console.log(list2); //Added single element/item/data in the last postition 

let list2b = ["word1","shambhala","Iron-man","Thor"];
list2b.push("Captain-america","Captain-marvel","Hulk","Falcon"); //Now using push added multiple element/data/item in the end of the array
console.log(list2b);




//2).Pop()  : Use to delete something from end and return
// ->Original array jisme se apn chahte hai usme se element delete krta hai
let list3 = ["chips","Buiscuit","snacks","Jelly","Coffee","Bornvita"];
console.log(list3); 
list3.pop(); //Array ka last wala element/item/data delete krdega by default
list3.pop(); //by default pop method last ke array element/item/data ko hi delete krta hai
console.log(list3);




//3).toString() :- Use to convert array to string
//ye original array me change nahi krta blki ek nya string wala array return krta hai
let list4 = ["Books","pencil","Drawingbook","Pen","Rubber"];
console.log(list4);
console.log(list4.toString()); //Array ko string me convert krke ek nya string array dedega original ko affect nahi krega

let marks2 = [60,65,70,75,80,85];
console.log(marks2);
console.log(marks2.toString()); //marks2 ko bhi string me change krdega aur nya string dedega
console.log(typeof(marks2.toString())) //Output string





//4).Concat() :- Use to join multiple arrays and returns result
//Original array me change nahi krega nya array bnake dega
console.log("Array-concat")

let MarvelHeroes24 = ["Spiderman","Venom","Thor"]
let DcHeroes24 = ["Superman","Batman","Aquaman"]
let IndianHeroes24 = ["Shaktiman","Krish","Flying Jutt"]

let heroes24 = MarvelHeroes24.concat(DcHeroes24,IndianHeroes24); //Dono arrays ko ek dusre ke sath jod diya
console.log(heroes24);

console.log(MarvelHeroes24 + DcHeroes24); //Ho to jayega pr glt hoga, isse data ka datatype string ho jayega, Output value array nahi hoga,  
console.log(typeof(MarvelHeroes24 + DcHeroes24));



//5).Sort() method
let unarrangedNumber84 = [4,3,6,2,8,6,5] //Isko sort krne ke liye mtlb ascending ya descending order me lane ke liye iska use krenge.
console.log(unarrangedNumber84.sort((a,b)=>a-b));
//ye sort ek predefined function hai jiss hm koi array jisme agr sari elements dhngse ascending ya descending order me arrange nahi hogi to iss sort se vo arrange ho jayenge
//Ye Original Array pr impact dalta hai
//sort() method by defualt numbers ko bhi string ke rup me treat krta hai isliye numbers ko ascending ya descending order me arrang krne ke liye functions use hota hai jese :-
// ascending ke liye .sort((a,b)=>a-b))
//Descending order ke liye .sort((a, b) => b - a); // descending
console.log("sort-method");
let NotArranged988 = [4,7,3,2,9,1,6,5,8]
NotArranged988.sort();
console.log(NotArranged988);





//6).Unshift() method :- Use to add elements/items/data at the start of original array
let Schools34 = ["SSPS","central academy","Kendriya vidyalya","Metro children gaden"];
console.log(Schools34)
Schools34.unshift("Grass-school");
console.log(Schools34); //unshift() ko use krne se Grass-school original array me sbse pehla element ke rup me add ho gya.





//7).Shift() :- Use to delete element/item/data from the start of the array
let RandomItems89 = ["Bag","Bed","Tables","Chair"];
console.log(RandomItems89);
RandomItems89.shift(); // By default apne aap sbse phla original array ka element/Item/data delete krdega 
console.log(RandomItems89); //Phla element/item/data hta diya jo output me show ho rha hai print krane pr.





//8).Slice() :- Return a piece of array.
//Ye slice method original array me change nahi krta ek nya array bna ke dedeta hai.
//ek particular koise bhi  array index number se lekr koise bhi array index number tk slice krke dega.
//arrayname.slice(Startindex.Endindex).
let Msale87 = ["Mirchi","Haldi","Namak","Dhaniya","Garam Masala"];
console.log(Msale87);
console.log(Msale87.slice(0,4)); //End index wala jo address denge uska element nahi dega/print nahi krayega uske jst phle wale element tk hi dega.
console.log(Msale87.slice(1,3));
console.log(Msale87.slice(1)); //isse 0 index position/address ko chodke baki sare index position ke element aa jayenge.





//9).Splice() Method :- Change original array(add,remove,replace)
//ye original array ko affect krta hai
//ArrayName.splic(startIndex, Jitne-delete-krne-hai, Nye-jo-add-krne-hai )
let Furniture54 = [1,2,3,4,5,6,7]; 
console.log(Furniture54);
Furniture54.splice(2, 2, 101, 102, 103); //Mtlb index number 2 se start hoga 2 elements ko delete kr diya jayega aur un 2 deleted elements ki jgh 2 nye elment data ko laya jayega jo hai 101,102 
console.log(Furniture54); 

//Furniture54.splice(2-starting index address, 2-no of elements on which it ap;ly, 101, 102, 103 value/data/element added);
console.log("splice-method");
let Family78 = [1,2,3,4,5,6,7,8]
Family78.splice(3,2,"a","b"); 
console.log(Family78);




//10).IndexOf() Method
let jack55a = [30,40,50,60,70]
console.log(jack55a.indexOf(70)) //Element/item/data value se index number btata hai



//11).At() Method
let jack55b = [30,40,50,60,70]
console.log(jack55b.at(3)) // Index number se element value nikal skte hai


//12).Map()   //Important for interview
//Also called higher order function HOF,
console.log("Map-related");
let mapRelated65 = [1,2,3,4,5,6,7,8];
let squar55 = mapRelated65.map((Number77,index)=>{
    let sqnum87 = Number77*Number77
    console.log("square-number: ",sqnum87,"index-number: ",index)
});
console.log(squar55);
//kisi aur function Parameter ke andr wala function Callback function hota hai
//Jo function apne function ke parameter ke andr koi aur function ko dalta hai use hm Higher order function khte hai
//Sare elements pe eksath koi function use krne ke liye use hoga.
//Isse hm eksath array ki sari values pr koi bhi arithemetic prform kr skte hai jese multiplication and devision 
//Yha pr ye index predefined hai 



//Tommorrow homework

//13).Filter()  //Important for interview
console.log("Filter-method-array");
let array788 = [1,2,3,4,5,6,7,8];
let eveNumber55 = array788.filter((value)=>{
    return value % 2 == 0;  // used for even
    // return value % 2 == 1; //used for Odd number
})
console.log(eveNumber55);




//14).Reduce()   //Important for interview
//array ki sari values ko single value me reduce krta hai
//Pure array ko single value me lekr ana
//Ye higher order function hai
let hhlk009 = [1,2,3,4,5,6,7,8]; 
let sum55 = hhlk009.reduce((acc12,curr)=>{
    let result = acc12 + curr
    return result;
},0)//Ye accumulater value agr accumulator ki value nahi dete to vo apne aap current value ki 0 index value lelega aur current value 1 index ki value se start hoga 
//Iska real life use website me cart me total price ki jesi chijo ke liye use hota hai
console.log(sum55);
//accumulator - initial value 0
//current value - change on every element
//acc + curr =1
/**
 Rule of thumb for reduce
Operation	Initial Value
Sum	0
Multiplication	1
String building	""
Array building	[]
Object building	{}
 */

//accumulator = 1
//current value = 1
//acc + curr = 2

//accumulator = 2
//current value = 2
//acc + curr = 4

//accumulator = 4
//current value = 3
//acc + curr = 7

//accumulator = 7
//current value = 4
//acc + curr = 11

//accumulator = 11
//current value = 5
//acc + curr = 16

 

//Object aur array same trike se store hote hai
//String methods in array


//array type
//Prefined sort ki bjaye khudhse kuch krenge to kya hoga







//------------------------------------------------String methods---------------------------------------------------------

//1).Lenght in string
let nam344a = "hello world" //Output 11    space ko bhi count krt hai
console.log(nam344a.length); //Ye hello world me kitne letters hai unka total number btadega
                            //Space ko javascript me white space bhi khte hai

let nam344b = "Apple\c" //yha pe slesh aur c dono ko ye ek hi manega mtlb iski length 6 hi hogi naki 7
//
console.log(nam344b.length);

//2).toUpperCase() method
let nam344d = "Atul yadav"
console.log(nam344d.toUpperCase()); //Isse sari strings ke letters uppercase me convert ho jayenge mtlb capital me convert ho jate hai 

//3).tolowerCase() method
let nam344e = "HELLO WORLD";
console.log(nam344e.toLowerCase()); //Isse puri string ke alphabets small letter yani lowercase me convert ho jayenge.

//4).Index of strings
// Hello world
// 012345678910 ye hello world ka index numbers hai

//5).Slice() method 
let nam344f = "Hihowareyou"
console.log(nam344f.slice(1,5)); //Index number 2 se 4 tk index number wali element/value/data ko slice krke print kra dega , isme jo last wala index address 5 diya uss last index number address ko ye consider nahi krega 
console.log(nam344f.slice(2)); //2 index address ke element/data/value se lekr last index number tk sare elements/data/value print kra dega

//6).replace() method
let name4 = "Arigato";
console.log(name4); //Normal without method
console.log(name4.replace("Arig","Yam")); //iss method se Arigato me se "Arig" ko "Yama" replace krdega 
//Jo string value hai exact same usi ke part same to same likhna pdega uske baad hi change replace kr payenge


//7).Concat() method
let name5 = "Medicine"
let name6 = "Kusuri";
let name7 = " Which is very useful"
console.log(name5.concat(" in japan medicine called by the name known as ",name6,name7));
//Iss concat() method se name5 name6 dono string ko hmne ek naye string ke sath jod diya.
let str = "Hello"
let str1 = "world";
let str2 = str.concat(" ",str1);
console.log(str2);

let name1c = "hello"+" world"+" You"+" May"+" get"+" a"+" good"+" fortune";
console.log(name1c,name6);

//8).trim() method
let name8 = "       Minasan      ";
console.log(name8); //Normal print isme space bhi print krega
console.log(name8.trim()); //Ye pure extra space ko htake print krega, mtlb trim string me jitna bhi extra space hota hai use hta deta hai.
let hello90 = "             hello       world          "

// Trimstart() method :- isse sirf data ke starting ke space ko hta diya jayega
//trimend() method :- isse sirf data ke ending ke space ko hta diya jayega


//9).replaceall() method
let name2 = "Old";
console.log(name2);
console.log(name2.replaceAll("Old","New"));


//10).indexof() method
let name1 = "Konnichiwa"
console.log(name1.indexOf("n")); //Index number bta dega particular element ke data ka 
console.log(name1.indexOf("n"),name1.indexOf("w"));

//11).split() method
let name1a = "Apple, graps, banana, mango"
console.log(name1a.split(","));
//ye method jbbhi output deta hai to vo array ki form deta hai
//split method me space nahi dekr agr koi character de to output me uss particular agr vo character value/data me hai to vo uss character

//12).charAt() method
let name1b = "Hiragan";
console.log(name1b.charAt(2)); //Index number do aur us index address wala particular element print ho jayega.
console.log(name1b.charAt(4));









//Question:- replace ka kam hi replace krna hai but vo original string me replace nahi krta
//Answer:- Kyoki string immutable hota hai isliye hm string me direct koi change nahi kr skte blki hme vapis se same name vala variable bnake usme value ko replace krna hoga ya to replace method se yafir us variable me jakr
//Immutable string :- Once a string is created, it cannot be changed or modified in javascript.
/*
let str = "hello world";

str = str.replace("world", "Javascript");

console.log(str); // Output = "hello Javascript"
*/


//Question-1 :- Jo kevl 1st character ko small se capital me convert krta hai uss string method ke bare me pdna hai
//Answer :- Koi direct method nahi hota hai function me split,map,join method ka use krna pdega jese niche kiya hai.
/*
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirst("hello world"));
// Output: "Hello world"
 */


 
// Include,indexOf,lenght,slice,splice,substring,join

// Include() method in javascript
console.log("Include() method of string");
let b9 = "Hi myself atul yadav"
let b10 = b9.includes("Hi");
let b11 = b9.includes("Ram");
console.log(b10); // Output True
console.log(b11); // Output false
//Ye case sensitive hoti hai 
console.log("Experiment")
// console.log(b9.indexOf("9")); // jo string me agr koi character/element/data/value exist nahi krta uska agr hm index pf nikalenge to vo -1 output dega , ye error handling ka kam krta hai 
//error handling ka trika hai 



// string.substring(startIndex, endIndex)
let text55 = "JavaScript";
console.log(text55.substring(0, 4));   // "Java"
console.log(text55.substring(4, 10));  // "Script"

text55.substring(4, 1);  // substring(1, 4) jaisa hi kaam karega
//end wali index address ka element print nahi krayega






console.log("hello" ==  "Hello") //data ke bichme koi bhi difference btata hai ki vo equal nahi hai mtlb data ko ek dusre se compare kre tb vo cas sensitive hota hai

// let b7 = "Hello world"
// console.log(b7.splice(2,2,12,13,14));

let b12 = "hello";
console.log(b12.replace("hello","olleh"));
let b13 = (b12.charAt(4),b12.charAt(3),b12.charAt(2),b12.charAt(1),b12.charAt(0));
let b14 = b13.trim
console.log(b14);

//1).reverse string
//str = "hello" -> "olleh" 
//2). check string is pallindrome or not
// let name = "NAMAN";  //isme agr age aur piche dono trf se word ko ulta krdo to bhi uska word same rhega.    

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
console.log(reverseAstring("Bottle"));
//Upr wale example me for loop me i>=0 wali condition btati hai ki jb tk i greater than or equal to  hai tb tk code run hoga aur jese hi i ki value -1 hogi loop bnd ho jayega kyoki condition false ho gayi.
//jisko me stop hone ki condition smj rha hu vo continue loop ko chlane ki coondition hai naki rukne ki uss conditon se bah nklne pr hi loop nd hoga    

function ae (input){
    let data = "";
    for(let v = input.length-1; v >= 0; v--){
    data = data + input[v];
    }
    return data;        
}
console.log(ae("Software"));



//Palindrome 
function padrolimm88 (String99){
    return String99 === String99.toString().split("").reverse().join("")
}
console.log(padrolimm88("madam"));
console.log(padrolimm88(101));
console.log(padrolimm88("Hello"));










//3).Object  
//------------------------------------------------------Object-----------------------------------------------------------
// object is the collection of key:value pair 
//Object is a real world entity :- choti se choti chis ko hm object smj skte hai , hr chij ek object hai unki properties and methods honge  jese kisi chij ke characterstics jese car ka colour, model, owner
//Objects OOPS se related hai  
//Object me by default copy by reference hota hai
//Mtlb agr Object1 = Object2 krenge to vo nya object bnane ki bjaye dono ko javascript same hi manegi mtlb chahe object1 me change kro ya fir object2 me change kro change dono me hoga mtlb ek nya object kbhi bna hi nahi vo dono same hi consider honga js me
let object66 = {
name : "Atul",  //Key koi method bhi ho skti aur peoperty bhi ho skti hai and value data hota  
age : 20,       //Key:value pairs ko coma se seprate krna pdega
city : "jaipur",
power : (pressButton) =>{
    console.log("PowerOn")
},
trackpad : function() {
    console.log("Cursor")
} //object ke andr jo function hm lgayenge usko method khte hai
}
console.log(object66.name); //Object ki key value ko .notation se access kr skte hai

object66.age = 25; //object ke keys ki value ese change kr skte hai

console.log(Object.keys(object66)); //Object ki keys ko output me print kra skte hai
console.log(Object.values(object66)); //Object ki values ko output me print kra dega
console.log(Object.entries(object66));//Object ki entries me key and values dono sathme me output me print krega
//Ye tino array ki form me output print krayenge

let fun0 = 3;
let fun1 = fun0;
fun0 = 2;
fun1 = 1;
console.log(fun0)
console.log(fun0);
console.log(fun1);
//Yha pr hm ek trh se ek variable ko dusre variable copy krne ki koshish ko hm copy khenge.
//Kisi ek variable ko kisi dusre variable me store krke agr unme se kisi ki bhi value agr change krenge to uska asr dusre variable pe nahi pdega iss trh ki copy krne ko hm "Deep copy" khenge 
//"Deep copy" :- copy by value


let object55 = object66;
console.log(object55);
console.log(object66);
/*
 Object1 ─┐
          ├──► [1, 2, 3]
 Object2 ─┘

 */
//Objects in JS are copied/Address and not by value aur iss trh ki copy ko hm "shallow copy" khte hai
//"Shallow copy" :- Copy by address/Reference
//Mtlb kisi variable ek alg already create hua va object store krakr agr dusre object(Jo nya object bnaya hai) ki values me changes krenge vo dono variable objects me change hoga kyoki isme value ko store nahi kiya jata blki dusra object(Jo nya object bnaya hai) uss phle vale object ka adress save krta hai aur isi vjh se dusre object me koi bhi change kre vo same to same apne aap phle wale object me bhi ho jata hai kyoki yha "Shallow copy" ho rha hai jo copy by Reference/Address hota hai
//to know more see //Shallow-copy_vs_Deep-copy.jpg 


//Question :- How to save deep copy  of objects  
//Objects are references types
//References types point to the address on heap
//Which give object assignment problem

let resere_arraya1 = [1,2,3,4,5,6];
let resere_arraya2 = resere_arraya1;
console.log(resere_arraya1.push("Hello"));
console.log(resere_arraya1)
console.log(resere_arraya2)


let car44 = {
    name : "swift-desire",
    colour : "White",
    Release_date : "Past 20 years",
    Work : "Multipurpous",
    cost : 300000
};
let car44b = car44; //Yha pe value copy na hoke address copy ho jayega jisse chahe car44 me change kre ya car44b me impact dono pdega dono vo change ayega jo normally kisi aur variable ke sath krte to nahi ata,

console.log("car44 is",car44);
console.log("car44 is",car44b);

car44.name = "Hyundai";

console.log("car44-changed-name");

console.log("car44 is",car44);
console.log("car44 is",car44b);



//------------------------------------------------Shallow copy
console.log("------Shallow-copy start----------")
//Shallow means "Little depth" like shallow water //Shallow water mtlb km ghra pani
//Shallow copy using Object.assign
                 //Object.assign copies properties from one object to another.
                 //Practical example
                 //Object.assign({},Object-name) //isme only properties hi copy hogi aur kisi ek object me kiya hua change dusre me change show nahi krega
    //Second method to do shallow copy
    //Shallow copy using spread operator "..."  //Isko array me bhi use kr skte hai
    //It copy object properties in another object not address 
//Shallow copy limitation with complex objects with many level of hierarchy (mtlb object me object dena ya multiple chije ek alg object ko parent object me bnakr dena )    
//spread operator object ko spread krta hai aur fir wapis se ek object me smetkr wapis dedeta hai. 


let car55 = {
    name : "swift-desire",
    colour : "White",
    Release_date : "Past 20 years",
    Work : "Multipurpous",
    cost : 300000
};
let car55b = Object.assign({},car55); //yha pe curly braces lga rkhe hai Target ke liye jis nye object me dalenge but yha pr hm already ise ek variable me dal rhe hai isliye yha koi nya target object nahi diya aur {} ko khali choda.  
console.log("car55b is",car55b);
console.log("car55 is",car55);

car55.name = "BMW";
car55b.name = "Mercdies"

console.log("After changing names")
console.log("car55b is",car55b);
console.log("car55 is",car55);



//Second method to do shallow copy
    //Shallow copy using spread operator "..."  //Isko array me bhi use kr skte hai
    //It copy object properties in another object not address 
    let pen1a = {
        name : "Ballpen",
        colour : "Blue",
        company : "spark",
        Riffil_time : "One month",
        Variants_available : {colour1:"Green",colour2:"Red",colour3:"Black",colour4:"Golden",} //Isme change krenge to isse shallow copy detect nahi krpayega shallow mtlb hi upr-upr ka hota hai to ye yha bhi upr upr ke elements pe kam krega.
    } 

    let pen2a = {...pen1a}; //Object spread operator usage
    console.log("pen1a is", pen1a)
    console.log("pen2a is",pen2a)

    console.log("After name changing");
    pen1a.name = "Jellpen";
    console.log("pen1a is", pen1a) //Iski property name change hokr jellpen ho gayi
    console.log("pen2a is",pen2a) //But iss pen2 ki property name ballpen hi rahi jo show krta hai ki ye reference/address copy nahi hone deta sirf properties hi copy  hoti hai

    console.log("After inner depth properties changing")
    //depth wale changes object me object ya kuch aur bnake usme aur property dena
    pen1a.Variants_available.colour1 = "Pink"; //depth change
    pen1a.Variants_available.colour2 = "White"; //depth change
    pen1a.Variants_available.colour3 = "Silver"; //depth change
    //Isbar pen1a me  change krenge to isse shallow copy detect nahi krpayega shallow mtlb hi upr-upr ka hota hai to ye yha bhi upr upr ke elements pe kam krega jo object me alg abject dekr usme koi properties dalenge to ye shallow copy usko detect nahi krpayega. 
    console.log("pen1a is", pen1a)
    console.log("pen2a is",pen2a) //Isbar change krne pr ye depth wale changes shallow detect nahi kra aur same to same jo depth wale changes pen1a me hue vo pen2a me bhi print kra diya.



    
    //--------------------------------------------------Deep copy
    console.log("-------------Deep copy-------------");
    //Deep copy using JSON.parse and JSON.stringify
    //JSON = javascript object notation
    let object1a = {
        name: "Atul",
        lastName : "Yadav",
        Address : {Area : "Sector 23", city : "Gurgaon", state:"Haryana",country:"India" },
        College : "JECRC",
        School : "SSPS",
        Specializtion : "Mern-stack",
        Coaching : "Grass Institute of learning"
    }
    let object2a = JSON.parse(JSON.stringify(object1a)) 
    console.log(JSON.stringify(object1a)) //isko sirialiaze khte hai
    // console.log(JSON.parse(object1a)); //isko desirialiaze khte hai
    //yha pr phle JSON.stringify se object1a ke pure data ko string bnadega fir JASON.parse se uss string ko vapis phle jesa krke object2a me store krdega aur ye depth me kam krta hai isliye sari properties exactly change hogi 
    //Object -> string -> Object

    console.log("object1a is",object1a)
    console.log("object2a is",object2a)

    console.log("After changing properties")
    object1a.School = "SSS";
    object1a.College = "Dev college";
    object1a.Address.city = "Tokyo";
    object1a.Address.country = "Japan";
    object1a.Address.state = "Central city prefecture";


    console.log("object1a is",object1a);
    console.log("object2a is",object2a);//deep copy ke JSON ki vjh se sirf properties copy hui aur jb change kiya to depth level pe bhi koi affect nahi pda shallow copy ki trh.







    //multiple of 5 and 3 by using loop
    for(r1 = 1; r1 <= 10; r1++){
        let r2 = r1 * 5
        let r3 = r1 * 3
    console.log("Multiple of 5 are", r2 ,"  And   Multiple of 3 is",r3);
}




//Predifined object methods
//Date object
//Ye ek inbuild object hota hai
let cuurDate = new Date()
console.log(cuurDate);
console.log(cuurDate.getDate());
console.log(cuurDate.getDay()); //Monday ko 1 kha hai
console.log(cuurDate.getTime());//isme 1970 se date store ho rahi hai
console.log(cuurDate.getMinutes());



// Math
//Ye bhi ek inbuild object method hota hai
console.log("Math-method")
console.log(Math.PI);
console.log(Math.random()); //ye hmesha 0 se 1 ke bi me point wali values dega example 1.9
console.log(Math.random()); 
let ciel55 = 6.1
console.log(Math.ceil(6.1)); //Output 7 //ye equal same dega jb value normal ho point me na likhi ho aur agr point me likhi ho to ye ek uss existing value se bda number dega
console.log(Math.floor(6.1)); //Ye given number se  chota number dega //6
console.log(Math.round(6.1)); //ye round me dega mtlb 6.5 se jyada value hogi to ciel value(bdi value) dega vrna floor value(choti value) dega
console.log(Math.round(6.7)); // output 7
console.log(Math.round(6.4)); //output 6
console.log(Math.round(6.5)); // output 7




//Question - yha pe iss random me integer normal number jese 1 jo 1 se bde ya 1 ho 
console.log("---------Question-------------")
let num89 = Math.floor(Math.random()*10);
console.log(num89);
//ye koisa bhi random number dega floor ke sath multiply by any inte value




//-----------------------------------------------DOM (Document Object model)--------------------------------------------
//Javascript HTML and CSS se interact hi DOM ke use se krti hai
//Functionality ko hm js me DOM se krte hai 
//webpage ko interactive bnane ke liye DOM ka use krte hai
//Browser inn documents ko tree like structure me smjhega


/*1.)The DOM is built using multiple APIs that work together.
2.)For example, the HTML DOM API adds support for representing HTML documents to the core DOM, and the SVG API adds support for representing SVG documents.
3.)SVG is image format.
4.)When a web browser parses an HTML document, it builds a DOM tree and then uses it to display the document.

5.)The DOM is not part of the JavaScript language, but is instead a Web API used to build websites.

6.)DOM is not a core part of Node.js.

7.)We are able to use DOM by using any programming language (like python) it is not specified for JS.

8.)It works on "document objects" or we say "window objects".

9.)Interfaces in DOM are predefined sets of properties and methods that describe how JavaScript can interact with different parts of an HTML document. Each node (document, element, text, event) uses a specific interface which defines what actions can be performed on it.

10.)A Node is the basic unit of the DOM.
DOM ke andar sab kuch Node hota hai, jaise:
Elements 
Text 
Comments 
Document 
Attribute
Node is like a super class (parent category).
11.)An Element is a special type of Node.
Yeh sirf HTML tags ko represent karta hai.

#sare elements node hote hai but sare node elements nahi hota

12.)the window object represents something like the browser, and the document object is the root of the document itself.
13.)we are able to create html tag using 
document.createElement("Tag-name").*/

//14.)kisi bhi website pe jakr inspect krke console me jakr Document likh kr document object access kr skte hai aur window type krke window object access kr skte hai

//15.)Document ko html kh skte hai 

//child object window object - global object window 
//window.document

/*get
   1.)document.getElementById("Idname") //

   2.)document.getElementByClassname("classname")

   3.)document.getElementByTagname("Tagname")

   4.)document.queryselector("#Idname") or(".Classname") 
   //isme jiska bhi id ya name de agr vese 1 se jyada elements ho tb ye sbse phle same name vale element ko print krayega, mtlb jese code line 19 aur 20 dono pe same name ka element hai to ye 19 line wale ko show krega  //isme class name .classname se denge aur Idname #idname se denge

   5.)document.queryselectorAll ("#Idname") or (".Classname")
    //ye same name wale sare elements ko show krdega  

   //Agr in elements ke through kisi element de aur uss tagname se , classname se , idname se 1 se jyada element ho to un sb ko ye ek array ke rup me show krega sbse phli line wale element ko sbse phle index address pe rkhega
 
   6.)Inner text =  
   //ye bhi text ko hi show krega 
   //comment show nahi krega 
   //Hidden text bhi show nahi krega
   /n = New line
   ➡ Gives visible text
   ➡ Slow
   ➡ Respects CSS
   ➡ Hides hidden text
   ➡ User-friendly
     

    7.)Inner html= 
    HTML ke pure code ko show kr deta hai sare element tag content sbkuch jo uss html content me hai
    //Commented part bhi show hoga
    //Hidden content element bhi show hoga

    8.)TextContent
    Only Text content ko show krega 
    //Comment show nahi krega
    //Hidden content ko show krta hai //mtlb jo content code me hai but webpage pe nahi hai(tags nahi sirf text content)   
    ➡ Gives all the text
    ➡ Fast
    ➡ Ignores CSS
    ➡ Shows hidden text
    ➡ Machine-friendly*/

//9.) Element.remove() //element ko remove krna 
//10.)Element.Create() //Element ko create krna 
//11.)Document.appendChild() //Ek element ko dusre element me dalne ke liye use krte hai
// element.parentNode
// element.childNodes
// element.firstChild
// element.lastChild
// element.nextSibling
// element.previousSibling


   

    // let changeElement = document.querySelector("#change")
    // changeElement.inner    
    
//    
    //Question-Dono Innertext and Textcontent ko show krte hai to do bnaye hi kyo hai ye sirf complexty hi bda rhe ha

   

  //Hm ek trh se dekhe to puri Html and styling hm js se kr skte hai but vo chijo ko complex krdega isliye km hi use krte hai ese kam ke liye
   //InnerHtml
   //InnerText
   //

//DOM pdna hai 
//Question what,why,How Dom    
/**
 DOM Node Types Table
Node Type	  Description	    Example
Document Node	Root of DOM	    document
Element Node	HTML tags	<div>, <p>
Text Node	Text content	"Hello"
Attribute Node	HTML attributes	id, class
Comment Node	HTML comments	<!-- -->
 */




//----------------------------------------------Timer Function 
//setTimeout, setInterval

// console.log("setInterval")
// setInterval(()=>{
//     console.log("Inside set interval Function")
// },5000) //every 5 second 
//in this 5000 miliseconds = 5 minute

//ctrl+c to stop this function

// console.log("1")
// console.log("1")

// setTimeout(()=>{ //Ye asynchronous code hota hai
//      console.log("Inside setTimeout Function")
// },3000);
// },0);

console.log("2")
//Kitne bhi synchronous code dedo but ye phle synchronous code ko hi execute krega aur un sbke code ko execute krne ke baad fir asynchronous code ko execute krega

//agr 2000 synchronous code he to  






//IIFE --> -----------------------------------Immeditely invoked function expression
/*(function (){
    console.log("Inside life")
})();*/
// Runs immediately
// Avoids global variable conflicts
// Creates a private scope
// Used in older JavaScript before let and const






//-----------------------------------------------Events In DOM---------
//Event in DOM are like hover, click aur ese hi koi tasks
//Ek event chlana example ke liye jb bhi hm koi online form submit krne ke liye submit button pe click krte hai vo event hota hai aur uske baad jo hota hai vo ek function ya task perform hota hai
/*These happen when user interacts using mouse.

Event	            Description
click      =    When an element is clicked
dblclick   =    Double-click
mousedown  =    Mouse button pressed
mouseup	   =    Mouse button released
mousemove  =    Mouse moves on element
mouseover  =    Mouse enters element
mouseout   =   	Mouse leaves element*/

/**
 Common Examples of Events

Clicking a button
Typing in an input field
Submitting a form
Moving the mouse
Page loading
 */


/*let Lpgin66aa = document.querySelector("#Login66a").addEventListener("click",()=>{
        console.log("Login Successfully")
        // alert("Login successfully")
     })
     console.log(Lpgin66aa);*/
    
    
    
    
    
                                                    //#Important
     //-----------------------------------------------Callback Function
     //-----------------------------------------------Callback Hell/Pyramid of Doom
     //AddTocart(
     //          Proceed to payment(
     //                               Payment methods (
     //                                                 Order booked confirmmation (
      //                                                                             Track order and rating system))   ))
     //)
     
     //Isme ye problem hoti hai ki ek pura pyramid bn jata code complex ho jata , Error debug krna
     //Difficult error handling
     //Deeply nested structure
     //Hard to read and maintain
     //Inversion of Control = Js khudse decide kregi ek baar code execution start hone ke baad 
     //-----------------------------------------------Higher order function - 
     //Bahr wale function ko hm higher order function bolenge aur andr vale function ko hm Callback function khenge 
    
     //Pdna hai
     //Solution of callback Hell 
     //Promises - .then() and .catch()
     //Async/Await - Synchronous way of doing asynchronous coding


     /**---------------------------------------------------Promises 
      *A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation.
       It is a placeholder for a value that you will get now, later, or never.
      //Promise ek object result aur state show krega jisse
      //Promises is container for future value
      //Eventual completetion and failure
     A Promise is an object in JavaScript that represents the result of an asynchronous operation.

     A Promise can be in 3 states:

     pending → working

     fulfilled → success

     rejected → error

    A Promise helps remove nested callbacks by using .then() and .catch() which makes code flat and clean.
    promises give promise to give result and execute the code
    //Promis of code execution
    promis - Resolve (Fulfill krega) ya to resolve hoga
           - Reject  (Fulfill krega) ya fir reject hoga
    //Alg-alg executions, programmes ko parallaly chlane ke liye promises ka use hota hai       
    */

    //Promise
    //Promise ek object hota hai
    //Object - State, result
    //State - pending, fulfilled, rejected
    //yha pe error handling easy ho jata hai

     let promise1a = new Promise(function(Resolve,Reject){
            console.log("Hello world")
     })   

     console.log("Hello Before")


let promise1 = new Promise(function(Resolve,Reject){
            console.log("Promise is pending")
            setTimeout(() => {
                console.log("I am a promise and I am resolved")
                Resolve(true)                
            }, 5000);

     })   

promise1.then((value) =>{
    console.log(value)
})  //Output true     



let promise2 = new Promise(function(Resolve,Reject){
            console.log("Promise is pending")
            setTimeout(() => {
                console.log("I am a promise and I am rejected")                
                Reject(new Error("I am a error"))
            }, 5000);

     })        

promise2.catch((error) =>{ 
    console.log("Some error is occured in promise2")
})
//Bina catch ko use kre direct error show kr rha tha code ke execution but catch ka use krne ke baad nahi kr rha

// promise2.then((value) =>{ 
//     console.log("Some error is occured in promise2")
// })

console.log("Hello after");



//Promis ka mtlb apke code result apko milega chahe sahi hoke mile (Resolve) ya fir galat hoke (Reject) apko intzaar nahi krna pdega vo vha pr atkega nahi parallaly background me use bhi execute krega 
//Hm eksath kitne hi promises de agr unka execution time hm same denge to vo sare same us time ke baad execute ho jayenge Example - agr hmne 50 promisess bnaye aur unko 5 second ka time diya to sb parallaly execute honge (Multi-thread work of asynchronous) aur sbke sb 5 second me hi execute ho jayenge
//Resolve and Reject already built in callbacks hai javascript Js inko call krti hai bs inka name likhna hai
//Initial state hmesha pending rhegi
//Aur fir State fulfill hogi chahe Resolve ho ya Reject
//jb tk time pura nahi hoga tb tk pending and undefined show krega


//Example - 
     //Zomato se aloo pratha mngvaya 
         //Pratha aa gya ghr pe (Resolve ho gya)
         //Pratha nahi aya koi problem ho gayi to zomato ne apko bta diya ki nahi aa paega (Reject ho gya)
         //Dono condition me result mila jisne apko wait nahi kraya sidha bta diya kam hoga ya nahi notify kr diya ha ya no ka result dekr request ko fulfil kr diya



//koi bhi esa task ya operation jisko hone me time lgega use hm asynchronous programming se krenge javascript 
//Sir promis programmes
//Generally Asynchronous programming ka use data ya API ko fetch krne ke liye kiya jata hai
/*let fetch56 = new promise1((Resolve,Reject)=>{
     
})*/

let data_Fetch88 = fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(data_Fetch88)
//Fetch method javascript me by default promise bna dega 
//Iss API me sara data ek Array me bahut sare object ke andr userdata dalke diya hai, API me data esa hi hota hai
//Array of objects = JSON data
//Promise chaining- ek promis ko multiple promises se attach krna
//Fake API just ek timepass ke liye example ke rup me use krne ke liye test krne ke liye programmes ko use kiya jata hai

// let data_Fetch89 =
// .then((response)=>{console.log(response.json())})
// .catch(()=>(console.log("unable fetch the data")))



//--------------------------------------------Promis chaining
//Promis chaining make code readability very complex it is the only disadvantage of promises which force us to use asyncawait
let Promis_chain1 = new Promise(function(Resolve,Reject){
        console.log("promisese is pending")
        setTimeout(()=>{
            console.log("This chain promise 1 is resolved")
            Resolve(true)
        }, 5000)
})

Promis_chain1.then((value)=>{
    console.log(value)
    let Promis_chain2 = new Promise(function(Resolve,Reject){
        console.log("This Promis-chain is second promis and now pending")
        setTimeout(function(){
               console.log("Now this second promis of promise-chain is resolved")
               Resolve(true)
        },2000)
    })
    return Promis_chain2
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



/*
let promise1 = new Promise(function(Resolve,Reject){
            console.log("Promise is pending")
            setTimeout(() => {
                console.log("I am a promise and I am resolved")
                Resolve(true)                
            }, 5000);

     })   

promise1.then((value) =>{
    console.log(value)
})  //Output true */


//console.log ka nature hmesha synchronous hi rhega even only prmis me bhi but agr ise .then , .catch ke sath use krenge to asynchronously work krega resolve reject krenge tb bhi asynchronously kam kreg. 





//-----------------------------------------------AsyncAwait
//Async Await ka code badme execute hoge phle synchronous code execute hoga
//Promis chaining make code readability very complex it is the only disadvantage of promises which force us to use asyncawait 
//Async = Asynchronous
//Await = particular Async wale code block me jisbhi code ke age Await lga denge uske baad ki line wala code (Uss particular Async block wala) await wala code ka execute hone ka intjaar krenge
try{
console.log("AsynAwait-1")
console.log("AsynAwait-2")
async function asyncTask (){
    let data = await fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8") //ab yha pr jb tk ye execute nahi ho jata agli 1786 aur 1787 line wala code execute nahi hoga js iske execute hone tk wait kregi 
    console.log(data)
    console.log("2")
}
asyncTask()
}
catch{
    console.log("Problem of fetch data")
}
console.log("3")

//jis task ko complete krne me time lgega uske age await lgaenge ye show krta hai ki jb tk ye task nahi hoega tb tk agla task execute nahi krega
//Async aur Await dono eksath hi use honge alg-alg use nahi ho skte
//Particular async Function ke andr ekse jyada jo task honge unme se jis task ke aage await lgega jb tk ye execute nahi hoga tb tk javascript agle codeline pe nahi jayega
//mtlb particular Async function wale block me hi jis task/operation me "await" likhenge vo function jb tk execute nahi hoga tb tk iss particular Async function ke block wale code me agle task ko execute nahi krega
//Particular Aync Function wale block me hi kam krega bahr ka code same vese hi chlega jese phle chl rha tha.
//Async Await promises ki jo disadvantage thi code complex krne wali use sahi krdeta hai


console.log("11")
let g8 = "Atul" 
async function NETTOOK55() {
    console.log("hello")
    // await console.log(g8)
    // console.log(g)
    console.log("By")
}
NETTOOK55()
console.log("22")
//AsyncAawait pdna hai



//1           1
//data        3
//2          data
//3           2



//----------------------------------------------Try-catch AsyncAwait/Exception handling
//Lgbhg hmesha Asynchronous task me iss Try-catch ka use hoga
//Agr hm chahte hai ki kisi bhi error ki vjh se hmara code execution nahi ruke to hm Try-catch ka use krte hai 
//Hmesha javascript me agr kisi ek line pe code ka error aa jata hai to uske baad wali lines execute nahi hoti but agr hm use particular error wale code pe Try and catch ka use kre to hm uss error ke ane ke bavjood uss error code wali line ke baad wali lines ke code ko bhi execute kra skte hai 
//Try se error ko try krega aur catch se js error na dekr hm uss error ko console.log("error") kra skte hai
//Try and catch "Error handling" ke kam aata hai
//Try me phle code ko ek aur baar Try krega agr sb shi rha to catch ko ignore krdega aur agr code galat nikla to catch pe jayega execution
//Try catch synchronously kam krte hai scheduled code pe nahi krenge mtlb agr hme ko scheduled code jese settimeout ke code ko try catch me dalna hai to vo Try catch wala code particular settimeout code ke block me hi likh skte hai agr uss code ko bahr likha to Try catch execute nahi hoga
//Try catch only synchronously kam krta hai
//Try catch code ko agr settimeout pe diya to vo error hi ditect nahi kr payega kyoki settimeout me apn ne ek 1-2 second(ya kitne bhi time ka wait krne ko kha ) but Try catch to synchronously kam krte hai vo settimeout ka wait nahi krenge aur error ko detect nahi kr payenge
//Example
try{ //ab kyoki yha scheduled ya asynchronous code hai isliye bahr wala try catch kam nahi krega
    setTimeout(()=>{
        try{ //Scheduled/Asynchronous code ke particular block ke andr hi try catch ka code kam krega wrna nahi krega
          console.log(Atul)
        }
        catch{
            console.log("Error")
        }
    },100)//But yha pr settimeout ne 100 milisecond ka time diya hai try catch iske liye wait nahi krenge vo age bd jayenge aur error hi detect nahi kr payenge
}
catch{
    console.log(error)
}
try{ //ab kyoki yha scheduled ya asynchronous code hai isliye bahr wala try catch kam nahi krega
    setTimeout(()=>{
        try{ //Scheduled/Asynchronous code ke particular block ke andr hi try catch ka code kam krega wrna nahi krega
          console.log(Atul)
        }
        catch{
            console.log("Error")
        }
    },0)//Yha pe kyoki koi wait krne ka time hi nahi hai iss vjh se yha try catch error detect krke error handling krlenge 
}
catch{
    console.log(error)
}

setTimeout(() => {
    console.log("Hacking wifi..... Please wait......")
}, 1000);

try{
console.log(Atul) //kyoki Atul name ka variable defined nahi hai to yha ek error ayega "Atul not defined wala"
}
catch{ //ab iss catch ki vjh se js error show krke koi error ko represent krne wala word print krdegi
    console.log("Kyo aa gya na error aye na mje")
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


//Question - Why we need asynchronous javascript  nature

//----------------------------------------------Blocking
//Blocking means the execution of code is stopped until a task is completed.While the task is running,                 no other code can run.
// Why it’s bad
// Freezes the UI
// Makes the app slow
// Poor user experience

//alert("Hello");   // Blocking
//console.log("After alert");
//In this programme console.log runs only after the alert is closed.



//---------------------------------------------Non-Blocking
//Non-blocking means execution continues without waiting for a task to finish.
// Why it’s good
// UI stays responsive
// Better performance
// Essential for real-world apps    

/**
 setTimeout(() => {
    console.log("Task completed");
}, 2000);

console.log("Next code runs immediately");
 */
//setTimeout does not block e xecution.
 

//------------------------------------Git and Github
//--> Github me bna tha
//--> Version control
//--> Team collaboration = Alg Alg team memebers jo alg-alg location pr hai vo eksath same project pe kam kr skte hai
//--> Rollback - Github se past me jo bhi task/function hmne kiya tha apne project me vo hm github ke through dekh skte  hai  
//--> DataNotLost - Github ka use krke hm data lost hone se bch skte hai 
//--> Github me Repositories hm apna code rkhte hai


 

    
    
 

// ctrl + f   (This shortcut key used to search any word by typing their name )

//Factorial
//5! = 5*4*3*2*1 => 120, 

//Fabonacci sequence
//0,1,1,2,3,5,
//0+1,1+1,2+1,2+3,

//Armstrong
// 153
// 1*3 + 5*3 + 3*3 = 3 + 12 

// console.log(b12.length-1);



//Loops in arrays






