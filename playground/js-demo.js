// console.log("Hello there");

// - Browser Environemnt - client-side
// - Node Runtime Environment - Server-side

// Node installer - 3 things 
//  - Node Runtime Env
//  - Node Package Manager - NPM
//  - Node Core Modules - path, os, fs, http, event etc


// Scope 


// var x = 100;

// function display() {
//     // var x = 200;
//     console.log("Outer function - ", x);         // ?
//     function b() {
//         // var x = 300;
//         console.log("Inner function - ", x);         //?
//     }
//     b();
// }

// display();




// var x = 100;

// function b() {
//     // var x = 300;
//     console.log("Inner function - ", x);         //100
// }

// function display() {
//     var x = 200;
//     console.log("Outer function - ", x);         // 200
    
//     b();
// }

// display();


// PROTOTYPE - object blueprint (__proto__)

// var person = {
//     eats : true
// }

// var foo = {
//     jumps : true
// }

// foo.__proto__ = person;

// console.log(foo.eats);
// var Shoe = {
//     size : 8
// }

// var magicShoe = Object.create(Shoe);
// magicShoe.gender = "Women";

// var customShoe = Object.create(magicShoe);

// console.log(customShoe.gender)
// console.log(customShoe.size)


// console.log(magicShoe.size);
// console.log(magicShoe);

// console.log(Shoe.isPrototypeOf(magicShoe));
// console.log(magicShoe.isPrototypeOf(Shoe));

// console.log(Object.prototype.isPrototypeOf(Shoe))        //?
// console.log(Object.prototype.isPrototypeOf(magicShoe))        //?



// Closures - process of binding the outer scope variable with inner function

// function testClousuer(){
//     var x = 4;
//     return function(){
//         return ++x;
//     }
// }

// var innerFunc = testClousuer();
// console.log(innerFunc());           // 5
// console.log(innerFunc());           // 6


// function buildTicket(transport){
//     var numOfPass = 0;
//     return function(name){
//         return "Hello " + name + ",\nYou are going via "+ transport+
//             "\nYou Ticket ID #"+ (++numOfPass);
//     }
// }

// var car = buildTicket("Car");
// console.log(car("Foo"));            // ?
// console.log(car("Bar"));            // ?

// var ship = buildTicket("Ship");
// console.log(ship("Bam"));           // ?