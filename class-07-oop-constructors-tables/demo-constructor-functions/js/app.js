'use strict';

// Demo for objects to constructors

// Let's make an object literal of one of you:

// var gregoryLiteral = {
//   firstName: 'Gregory',
//   lastInitial: 'D',
//   course: '201d24',
//   hometown: 'Aurora, CO',
//   faveNumber: 7,
//   faveColor: 'blue',
//   isCodeNinja: true,
//   introduction: function() {
//     console.log('Hi, my name is ' + this.firstName + ' and I am from ' + this.hometown);
//   }
// };

// I would need 276 LOC (lines) of code to model our entire class this way
// (23 students * 12 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects? We have these things, and they are called CONSTRUCTOR FUNCTIONS.

function Student(firstName, lastInitial, hometown, faveNumber, faveColor){
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.course = '201d24';
  this.hometown = hometown;
  this.faveNumber = faveNumber;
  this.faveColor = faveColor;
  this.isCodeNinja = true;
  this.introduction = function() {
    console.log('Hi, my name is ' + this.firstName + ' and I am from ' + this.hometown);
  };
  mahClass.push(this);
}

var mahClass = [];
// What could that array for? Why would I need one?
new Student('Gregory', 'D', 'Aurora, CO', 7, 'blue');
new Student('Ivette', 'C', 'Guatemala', 9, 'blue');

// 15 lines of code to make two student objects; which means I would need 21 lines of code to make objects of the rest of the class. Thus, 38 lines of code to model the entire class. That's A LOT less than 276 LOC that I'd need with object literals.

for(var i = 0; i < mahClass.length; i++){
  console.log(mahClass[i].firstName);
}

function studentsInTheDOM() {
  var studentList = document.getElementById('students');
  for(var i = 0; i < mahClass.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = mahClass[i].firstName;
    studentList.appendChild(liEl);
  }
}
