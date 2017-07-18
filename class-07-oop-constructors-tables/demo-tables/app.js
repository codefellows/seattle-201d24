'use strict';

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>             PUT THIS AND ONLY THIS IN THE HTML, WITH AN ID
  <tr>              create tr
    <th>Name</th>   create a th, give it content, append it to tr
    <th>Color</th>  create a th, give it content, append it to tr
    <th>Tail</th>   create a th, give it content, append it to tr
  </tr>             append tr to the table

  <tr>
    <td>Buddy</td>
    <td>Orange and White</td>
    <td>VERY long</td>
  </tr>
</table>

Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.

We'll need to create and append HTML elements in the same order.

We have already put an empty <table> element in the HTML, with id="cats" */

// This is an array to hold our cats
var allCats = [];

// We need to access the table that is in the DOM
var catTable = document.getElementById('cats');

// We need a constructor to make our cat objects
function Cat(name, color, tail){
  this.name = name;
  this.color = color;
  this.tail = tail;
  allCats.push(this);
  this.render = function() {
    var trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.color;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.tail;
    trEl.appendChild(tdEl);

    catTable.appendChild(trEl);
  }
}

new Cat('Buddy', 'orange and white', 'VERY LONG');
new Cat('Alistair', 'orange', 'small');
new Cat('Trillian', 'black and orange', 'very small');
new Cat('Meow Mix', 'black', 'large');
new Cat('Toeny', 'gray', 'medium-large');

// console.table(allCats);

// IGNORE LINE 65; WE WILL TALK ABOUT IT WEDNESDAY
// Let's add a render() method to the constructor's prototype

// We need a separate function to make the table header
function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Tail Size';
  trEl.appendChild(thEl);

  catTable.appendChild(trEl);
}

// It would be nice to have a single function that renders all of the individual cat rows

function catRowsFTW() {
  for(var i = 0; i < allCats.length; i++){
    allCats[i].render();
  }
}

makeHeaderRow();
catRowsFTW();
