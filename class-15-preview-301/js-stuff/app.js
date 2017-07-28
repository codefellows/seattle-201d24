'use strict';

//++++++++++++++++++++++++++
// Function declarations vs function expressions
//++++++++++++++++++++++++++

// Function declarations may be called anywehere in the code. This is because of hoisting.

// declaration('I was called BEFORE the function declaration');

function declaration(msg) {
  console.log(msg);
}

// declaration('I was called AFTER the function declaration.');

// Function expressions, howver, may not be called before being assigned.

// expression('I was called BEFORE the function expression and blocking the rest of the code on the page from being exectuted! Comment me out to make the other code work again.');

var expression = function(msg) {
  console.log(msg);
};

// console.log(fishBiscuit); // console gonna say 'fishBiscuit is not defined'; haters gonna hate

// expression('I was called AFTER the function expression.');

// Why does this work this way...?

//++++++++++++++++++++++++++
// Scope & Hoisting
//++++++++++++++++++++++++++

// Let's refresh our minds on the concept of scope.

// console.log(globalVar);
// What did we get from that console.log()?
// What's causing this, you wonder? A behavior of JS called "hoisting"

var globalVar  = '"I am GLOBALLY scoped and can be viewed, accessed, or modified from anywhere!""';

function theScopeMaker() {
  console.log(globalVar, 'said globalVar from inside a function.'); // works great

  var localVar = '"I am LOCALLY scoped and can be viewed, accessed, or modified from the scope in which I am created! And... in any child scopes"';

  console.log(localVar, 'said localVar from inside the function');
}

// console.log(localVar, 'This will cause an error to appear in the console that complains ,"...localVar is not defined"');


//++++++++++++++++++++++++++
// IIFEs
//++++++++++++++++++++++++++

// (function anIffeCallsItelf() {
//   var youCantSeeMe = 'Isaiah is stealthy';
//    alert('This alert window is housed in an Immediately Invoked Function Expression! It runs on page load without polluting the global namespace. Everything inside of an IIFE is scoped locally. This is a standard technique for items that need to execute on page load.');
//    return console.log(youCantSeeMe);
//  }());


//++++++++++++++++++++++++++
//Prototypal inheritance
//++++++++++++++++++++++++++

// Let's revisit Class 7...

function Student(firstName, lastInitial, hometown, faveNumber, faveColor){
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.course = '201d24';
  this.hometown = hometown;
  this.faveNumber = faveNumber;
  this.faveColor = faveColor;
  this.isCodeNinja = true;
  mahClass.push(this);
}

Student.prototype.introduction = function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
}

// And then, what if I had an array where I could store all of you?
var mahClass = []; //eslint-disable-line

// Instances; assigning them into variable for easier inspection
new Student('Gregory', 'D', 'Aurora, CO', 7, 'blue');
new Student('Ivette', 'C', 'Guatemala', 9, 'blue');

// When we say that instances of "Student" inherit properties from the constructor "Student"... that's not exactly correct. Which in code, means that it is totally wrong.

// Actually, the instances of "Student" (that being juan, ophelia, and gary) inherit from a property on the "Student" constructor called "prototype", what we would express as "Student.prototype"

Student.prototype.nextCourse = '301d23';

Student.aintGonnaBeInherited = 'NO SOUP FOR YOU!';

mahClass[0].faveMovie = 'Xanadu';
mahClass[1].faveTimeOfDay = 'Happy Hour';

// This gives us flexibility in how we can manipulate individual instances of a constructor: we can do so all at once by manipulating the constructor, or we can also work with the objects individually to give them unique properties/values

// This also allows us to make our code a little neater and more modular when assigning functions as object properties (what we refer to as "methods")
