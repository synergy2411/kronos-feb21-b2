// Arrow functions - Lanmbda Expr in Java (->) | =>
//  - one liner function
//  - don't have 'this' keyword
//  - don't have 'arguments' keyword
//  - don't call with 'new' operator

// import { getMyLuckyNumber } from "./utils";

// function Person(firstName){
//     // var this = {};
//     this.firstName = firstName
//     this.getName = function(){
//         return "Hello " + this.firstName;
//     }
//     // return this;
// }
// var foo = new Person("Foo");
// console.log(foo.getName())

// var Person = () => {}
// var bar = new Person();

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         // var that = this;
//         return () => {
//             return this.firstName+ " " + this.lastName;
//         }
//     }
// }
// var innerFunc = user.getFullName()
// console.log(innerFunc()); 

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         // var that = this;
//         return function(){
//             return this.firstName+ " " + this.lastName;
//         }
//     }
// }
// var innerFunc = user.getFullName()
// console.log(innerFunc());        // undefined undefined



// ES5 way
// var numbers = [1,2,3,4,5];
// var doubleValue = numbers.map(function(value){
//     return value * 2;
// })
// console.log(doubleValue);

// ES6 way
// var newNumbers = [1,2,3,4,5];
// var newDoubleValue = newNumbers.map(value => value * 2 )
// console.log(newDoubleValue);



// Destructuring - Arrays / Objects

// var arr = ["foo", "Bar", "Bam", "Bas"];
// var [arr1, arr2, arr3, arr4, arr5] = arr; 
// console.log(arr3, arr5);


// var obj = {email : "test@test.com", age : 32};
// var {email} = obj;
// console.log(email)

// var user = {
//     firstName : "Foo",
//     age : 34,
//     address : {
//         city : "Delhi",
//         street : "201, Main Road"
//     },
//     friends : ["Bar", "Bam", "Bas"]
// }

// var {firstName, age, address: {city, street}, friends : [f1, f2, f3]} = user;
// console.log(firstName, city, f2)

// var users = [
//     {
//         email :"test@test.com",
//         age : 32
//     },
//     {
//         email :"abc@test.com",
//         age : 33
//     },
//     {
//         email :"xyz@test.com",
//         age : 34
//     },
//     {
//         email :"pqr@test.com",
//         age : 35
//     },
// ]

// var [s1, s2, s3] = users;
// var {email : e1, age : a1} = s2;
// var {email : e2, age : a2} = s3;
// // var [{email, age}, {email, age}, {email, age}] = users;
// console.log(e2);








// Rest/Spread Operators (...)
//  - Rest : takes inidividual element and creates the collection | Array

// function display(email, age, ...args){
//     console.log(args[0]);          // ?
// }
// display("test@test.com")
// display("test@test.com", 32)
// display("test@test.com", 32, true)

//  - Spread : takes collection and split them into individual variables
// var arr = [3, 4, 5];
// var newArr1 = [1, 2, arr, 6, 7];            // [1,2,[3,4,5],6,7]
// console.log(newArr1)
// var newArr2 = [1, 2, ...arr, 6, 7];         // [1,2,3,4,5,6,7]
// console.log(newArr2)

















// Maps & Sets
// var map = new Map();
// map.set("firstName", "Foo");
// map.set(1, "one")
// map.set({name: "john"}, "the Name")

// for(let keys of map.keys()){
//     console.log(keys)
// }
// for(let value of map.values()){
//     console.log(value)
// }

// var user = {
//     "firstName" : "Foo",
//     "1" : "one"
// }

// var arr = [1,2,3,4,5,2,3,4,5]
// var set = new Set(arr)
// for(let value of set){
//     console.log(value)
// }











// Template Literals - "" | '' | ``
// - Embed variables within string
// - Multiline string

// var age = 32;
// var email = "test@tet.com"
// var str = `Hello ${email}, 

// I am ${age} years old!`

// console.log(str)

















// Block Scoping : restricts scope of variable to the nearest curly braces
// - const : constant variables
// - let : for other variables

// function display(arr){
//     if(arr.length > 2){
//         var LOAD = "Loading..."
//         console.log(FLASH);         //'undefined' | Not defined
//     }else{
//         var FLASH = "Flashing..."
//     }
// }

// console.log(FLASH)

// display([1,2,3,4])

// const USER = "Foo";
// const user = {
//     firstName : "Foo"
// }

// user = {
//     firstName : "Bar"
// }

// user.firstName = "Bar";
// user.lastName = "Bam"
// console.log(user);      // ?















// Object.assign()

// var user = {
//     firstName : "Foo",
//     middleName : "Bar"
// }
// var user2 = {
//     firstName : "Bar",
//     lastName : "Bam",
//     age : 28
// }
// var user3 = {
//     email : "test@test.com",
//     age: 32,
//     firstName : "Baz"
// }

// let obj = Object.assign({}, user, user2, user3);

// console.log(obj);           
//{ firstName : "Baz", lastName : "Bam", email :"test@test.com", age : 32 }

// let targetObj = Object.assign(
//     { firstName: "Foo", email : "xyz@test.com" },
//     { email: "test@test.com", age: 32 },
//     {});

// console.log(targetObj);



// var Shoe = {
//     size : 10
// }

// var magicShoe = Object.create(Shoe);
// console.log(magicShoe.size);            // 10
// console.log(magicShoe);             // {}

// console.log(magicShoe.hasProperty('size'))

// console.log(Shoe.hasOwnProperty("size"))
// console.log(magicShoe.hasOwnProperty("size"))




// var user = {
//     firstNAme : "Foo"
// }

// // Reference delinked
// var user1 = {...user};

// // Reference created
// var user2 = user;

// user1.firstNAme = "Bar";

// console.log(user)           // ?
// console.log(user1)             // "Bar"



// var x = 100;
// console.log(typeof x);
// x = "Some String"
// console.log(typeof x);
// x = {}
// console.log(typeof x);

// var person = {
//     eats : true
// }
// var user = Object.create(person);

// let obj = Object.assign({}, user);

// console.log(obj.eats);      // ?

// console.log(person.isPrototypeOf(obj));












// Optional Parameter


// let user = {};

// // console.log(user?.address?.city);         // ?
// console.log(user.address.city);         // ?












// Classes & Modules - ES6 / ES2015

// ES5 - constructor
// function Student(email , age){
//     this.email = email;
// }
// Student.prototype.getDeatils = function(){}

// var bar = new Student("XYZ@test.com", 40);
// console.log(bar.getDeatils());

// function String() {

// }
// String.prototype.length = function(){
//     return "";
// }
// String.prototype.indexOf = function(){
//     return "";
// }

// var str = "SOme String";
// console.log(str.length);


// // ES6 - class
// class Student{
//     private email : string;
//     constructor(email, age){
//         this.email = email;
//     }
//     getDetails (){ 
//         return " Hello " + this.email;
//     }
// }

// let foo = new Student("test@test.com", 34);
// console.log(foo.getDetails());