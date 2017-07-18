'use strict';

// Demo for objects to constructors

// Let's make an object literal of one of you:

var gregoryLiteral = {
  firstName: 'Gregory',
  lastInitial: 'D',
  hometown: 'Aurora, CO',
  faveNumber: 7,
  faveColor: 'blue',
  isCodeNinja: true,
  introduction: function() {
    console.log('Hi, my name is ' + this.firstName + ' and I am from ' + this.hometown);
  }
};

// I would need 253 LOC (lines) of code to model our entire class this way
// (23 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// var mahClass = [];
// What could that array for? Why would I need one?

// Now all I need is XXX lines of code to represent all 23 students instead of XXX. What a bargain!
