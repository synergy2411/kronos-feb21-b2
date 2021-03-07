// Arrow functions - Lanmbda Expr in Java (->) | =>
//  - one liner function
//  - don't have 'this' keyword
//  - don't have 'arguments' keyword
//  - don't call with 'new' operator

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

var arr = ["foo", "Bar", "Bam", "Bas"];
var [arr1, arr2, arr3, arr4, arr5] = arr; 
console.log(arr3, arr5);


var obj = {email : "test@test.com", age : 32};
var {email} = obj;
console.log(email)

var user = {
    firstName : "Foo",
    age : 34,
    address : {
        city : "Delhi",
        street : "201, Main Road"
    },
    friends : ["Bar", "Bam", "Bas"]
}

var {firstName, age, address: {city, street}, friends : [f1, f2, f3]} = user;
console.log(firstName, city, f2)

var users = [
    {
        email :"test@test.com",
        age : 32
    },
    {
        email :"abc@test.com",
        age : 33
    },
    {
        email :"xyz@test.com",
        age : 34
    },
    {
        email :"pqr@test.com",
        age : 35
    },
]








// Rest/Spread Operators
// Maps & Sets
// Classes & Modules
// Template Literals
// Block Scoping
// Object.assign()
// Optional Parameter
