'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm'];

var pikePlace = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  customersPerHour: [],
  calcCustomersPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  cookiesSoldEachHour: [],
  calcCookiesSoldEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
      console.log(this.totalCookiesPerDay, 'running daily cookie total');
    }
  },
  totalCookiesPerDay: 0,
  render: function(){
    var pikeList = document.getElementById('pike');
    this.calcCookiesSoldEachHour();
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      pikeList.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    pikeList.appendChild(liEl);
  }
};
