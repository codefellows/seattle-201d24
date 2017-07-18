'use strict';

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>
  <tr>              create tr
    <th>Name</th>   create a th, give it content, add it to tr
    <th>Color</th>  create a th, give it content, add it to tr
    <th>Tail</th>   create a th, give it content, add it to tr
  </tr>             add tr to the table

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

// We need a constructor to make our cat objects

// Let's add a render() method to the constructor's prototype

// We need a separate function to make the table header

// It would be nice to have a single function that renders all of the individual cat rows
