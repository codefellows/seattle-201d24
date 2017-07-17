'use strict';

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thor\'s Day', 'Friday', 'Saturday', 'Sunday'];

// Favorite Seattle beaches

 var alki = {
   name: 'Alki',
   seagullCount: [34, 56, 78, 14, 3000, 9000, 1200],
   render: function(){
     var alkiUL = document.getElementById('alki');
     // This will render the seagull data array to the DOM
     // We'll need a 'for' loop to iterate over the array
     for(var i = 0; i < this.seagullCount.length; i++){
       // There are three parts to this process:
       // 1. Create an element
       var liEl = document.createElement('li');
       // 2. Give it content
       liEl.textContent = days[i] + ': ' + this.seagullCount[i];
       // 3. Append it to a certain place in the DOM
       // parentElement.appendChild(childElement)
       alkiUL.appendChild(liEl);
     }
   }
 };

 alki.render();

var goldenGarden = {
  name: 'Golden Garden',
  seagullCount: [3,5,4,7,5,9,8],
  render: function(){
    var golden = document.getElementById('gg');
    // This will render the seagull data array to the DOM
    // We'll need a 'for' loop to iterate over the array
    for(var i = 0; i < this.seagullCount.length; i++){
      // There are three parts to this process:
      // 1. Create an element
      var liEl = document.createElement('li');
      // 2. Give it content
      liEl.textContent = days[i] + ': ' + this.seagullCount[i];
      // 3. Append it to a certain place in the DOM
      // parentElement.appendChild(childElement)
      golden.appendChild(liEl);
    }
  }
};

goldenGarden.render();

var edmondsBeach = {
  name: 'edmondsBeach',
  seagullCount: [52,46,76,87,365,13,38],
  render: function(){
    var eddie = document.getElementById('edmonds');
    // This will render the seagull data array to the DOM
    // We'll need a 'for' loop to iterate over the array
    for(var i = 0; i < this.seagullCount.length; i++){
      // There are three parts to this process:
      // 1. Create an element
      var liEl = document.createElement('li');
      // 2. Give it content
      liEl.textContent = days[i] + ': ' + this.seagullCount[i];
      // 3. Append it to a certain place in the DOM
      // parentElement.appendChild(childElement)
      eddie.appendChild(liEl);
    }
  }
};

edmondsBeach.render();



var pike = {
  minCustPerHr: 10,
  maxCustPerHr: 100,
  avgCookiesPerCust: 3.4,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesPerDay: 0;
  (methods to calculate customer and cookie totals)
  (method to calculate customers per hour)
}
