let i = 0;
while(i<=10){
    console.log("I is",i)
    i++
}

i = 1;
while(i<=40){
    console.log("Japan")
    i++
}


let Age1 = 80;
if(Age1 >= 18 && Age1<=19){
    console.log("you can vote")
}
else if (Age1<=6){
    console.log("you are infant")
}
else if(Age1<=17&&Age1>=15){
    console.log("You are teenager")
}
else if(Age1>=18 && Age1<=21){
    console.log("Able to give vote but not able to do marriage")
}
else if(Age1>=21 && Age1 <= 35){
    console.log("You are able to do marriage")
}
else if(Age1>=40 && Age1 <= 59){
    console.log("You are middle age man or woman")
}
else if(Age1>=60){
    console.log("You are old man")
}
else(console.log("You are from another planet"))





i1 = 10;
for( i1; i1>=1; i1--){
    console.log(i1,"Hello world")
}


console.log("Pratice")
let a18 = 1
console.log(++a18)
let a19 = 1
console.log(a19++)
console.log(a19++)

for(let i = 1; i <= 10; i++){
    console.log("Odd number:",i+1)
}

let arr55 = [1,2,3,4,5,6];
console.log(arr55.length);
let n2 = arr55.length
console.log(n2);
console.log(arr55[n2-1]);

let ul = ["Hello"]
console.log(ul.length)
console.log(ul)
ul[0] = "world"
console.log(ul)

let str = "hello"
console.log(str)
str[0] = "H"
console.log(str)

let list2 = ["potato","apple","Litchi","Tomato"] 
console.log(list2)
list2.push("Added food item");
console.log(list2); //Added single element/item/data in the last postition 

let list2b = ["word1","shambhala","Iron-man","Thor"];
console.log(list2b)
list2b.push("Captain-america","Captain-marvel","Hulk","Falcon"); //Now using push added multiple element/data/item in the end of the array
console.log(list2b);

let list3 = ["chips","Buiscuit","snacks","Jelly","Coffee","Bornvita"];
console.log(list3); 
list3.pop(); //Array ka last wala element/item/data delete krdega by default
list3.pop(); //by default pop method last ke array element/item/data ko hi delete krta hai ab yha pe coffee last element/data hai
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
console.log("sort-method");
let NotArranged988 = [4,7,3,2,9,1,6,5,8]
NotArranged988.sort();
console.log(NotArranged988);

let hu = [3,2,11,4,8,9,10]
hu.sort((a,b) => (a-b))
console.log(hu)
hu.sort((a,b) => (b-a))
console.log(hu)

//6).Unshift() method :- Use to add elements/items/data at the start of original array
let Schools34 = ["SSPS","central academy","Kendriya vidyalya","Metro children gaden"];
console.log(Schools34.length)
Schools34.unshift("Grass-school");
console.log(Schools34.length); //unshift() ko use krne se Grass-school original array me sbse pehla element ke rup me add ho gya.



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
Furniture54.splice(2, 6, 101, 102, 103); //Mtlb index number 2 se start hoga 2 elements ko delete kr diya jayega aur un 2 deleted elements ki jgh 2 nye elment data ko laya jayega jo hai 101,102 
console.log(Furniture54); 



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

//13).Filter()  //Important for interview
console.log("Filter-method-array");
let array788 = [1,2,3,4,5,6,7,8];
let eveNumber55 = array788.filter((value)=>{
    return value % 2 == 0;  // used for even
    // return value % 2 == 1; //used for Odd number
})
console.log(eveNumber55);

//11).split() method
let name1a = "Apple, graps, banana, mango"
console.log(name1a.split(","));

/*let str = "hello world";
str = str.replace("world", "Javascript");
console.log(str); // Output = "hello Javascript"*/


let fun0 = 3;
let fun1 = fun0;
console.log(fun1)
fun0 = 2;
console.log(fun1)
console.log(fun0)

fun1 = 1;
console.log(fun0,"------------")
console.log(fun0,"------------");
console.log(fun1,"------------");







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

    let pen2a = Object.assign({},pen1a);

    /*let pen2a = {...pen1a}; //Object spread operator usage
    console.log("pen1a is", pen1a)
    console.log("pen2a is",pen2a)

    console.log("After name changing");
    pen1a.name = "Jellpen";
    console.log("pen1a is", pen1a) //Iski property name change hokr jellpen ho gayi
    console.log("pen2a is",pen2a) //But iss pen2 ki property name ballpen hi rahi jo show krta hai ki ye reference/address copy nahi hone deta sirf properties hi copy  hoti hai*/

    console.log("After inner depth properties changing")
    //depth wale changes object me object ya kuch aur bnake usme aur property dena
    pen1a.Variants_available.colour1 = "Pink"; //depth change
    pen1a.Variants_available.colour2 = "White"; //depth change
    pen1a.Variants_available.colour3 = "Silver"; //depth change

    pen2a.Variants_available.colour1 = "QQQQQQQ"

    console.log("pen1a is", pen1a)
    console.log("pen2a is",pen2a) 



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


let obj2 = JSON.parse(JSON.stringify(object1a))

let cuurDate = new Date()
console.log(cuurDate);
console.log(cuurDate.getDate());
console.log(cuurDate.getDay()); //Monday ko 1 kha hai
console.log(cuurDate.getTime());//isme 1970 se date store ho rahi hai
console.log(cuurDate.getMinutes());


setTimeout(()=>{
    console.log("Hello world")
},5000)


let promise44 = new Promise(function(Resolve,Reject){
    console.log("hh")
})


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


sayHi();   // Works due to hoisting

function sayHi() {
    console.log("Hi!");
}


//------------------------------------Git and Github
//--> Github me bna tha
//--> Version control
//--> Team collaboration = Alg Alg team memebers jo alg-alg location pr hai vo eksath same project pe kam kr skte hai
//--> Rollback - Github se past me jo bhi task/function hmne kiya tha apne project me vo hm github ke through dekh skte  hai  
//--> DataNotLost - Github ka use krke hm data lost hone se bch skte hai 
//--> Github me Repositories hm apna code rkhte hai

//Github unhone hi bnaya hai jinhone linux bnaya tha
//Github microsoft ne bnaya hai
//GIthub opensource hai
//Github me repositories bnti hai
//Bitburnet ye bhi github ke jesa hai jo paid he aur atlassian company ne ise bnaya hai
//Jira project management tool bhi atlassian ne hi bnaya hai
//Folder hi repositories hai

//Readme file is the longer description of our project
//Git ignore
//U - untraced
//A - added
//Git init krne ke baad sari files ke age 
//U mtlb untraced konsi repositary me dallni hai 
//Git add (File ke age 'A' likha ayega )
//git add . (isse sari file add ho jayegi)
//git status (sari files ka track status bta dega)
//git commit -m "Messag" (file ko commit krne ke liye use krte hai, aur message me vo chij likhenge jo btayega ki hmne code me uss din kya kra tha)
//git log (iss pta chlega ki kb kya file me changes hua hai)
//Starting me data working directory 
//Add krne ke baad Staging index me jayega
//Commit krne ke baad 
//Git branch -m main
//git remote add origin (link of github server)
//git push -u origin main (code ko push krne ke liye github ki main branch pe)
//Maximum 50 mb se jyada ki file hm github pe push nahi kr skte ,mtlb image and videos generally nahi rkh skte code or text hi rkhenge

//Git clone link of the repository which need to be copy
