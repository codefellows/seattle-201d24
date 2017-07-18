'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am'];

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

  },
  totalCookiesPerDay: 0,
  render: function(){

  }
};
