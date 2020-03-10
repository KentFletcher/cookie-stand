'use strict';

/*Seattle Location*/

var seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSales: 6.3,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],

  GenRandCustomerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    // console.log(this.avgCustomerHour);
  },

  avgCookiesHour: function(){
    this.cookiesPerHour.push(this.avgCustomerHour() * this.avgCookieSales);
    return this.avgCustomerHour() * this.avgCookieSales;
    // this.avgCookiesHour = this.avgCustomerHour * this.avgCookieSales;
    // console.log(avgCookiesHour);
  },

};

console.log(seattle);

// var storeAverage = document.getElementById('Seattle');

// for (let index = 0; index < this.hoursOpenDay; index++) {








var tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSales: 1.2,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],

  GenRandCustomerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    // console.log(this.avgCustomerHour);
  },

  avgCookiesHour: function(){
    this.cookiesPerHour.push(this.avgCustomerHour() * this.avgCookieSales);
    return this.avgCustomerHour() * this.avgCookieSales;
    // this.avgCookiesHour = this.avgCustomerHour * this.avgCookieSales;
    // console.log(avgCookiesHour);
  },

};

console.log(tokyo);







var dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSales: 3.7,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],

  GenRandCustomerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    // console.log(this.avgCustomerHour);
  },

  avgCookiesHour: function(){
    this.cookiesPerHour.push(this.avgCustomerHour() * this.avgCookieSales);
    return this.avgCustomerHour() * this.avgCookieSales;
    // this.avgCookiesHour = this.avgCustomerHour * this.avgCookieSales;
    // console.log(avgCookiesHour);
  },

};

console.log(dubai);






var paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSales: 2.3,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],

  GenRandCustomerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    // console.log(this.avgCustomerHour);
  },

  avgCookiesHour: function(){
    this.cookiesPerHour.push(this.avgCustomerHour() * this.avgCookieSales);
    return this.avgCustomerHour() * this.avgCookieSales;
    // this.avgCookiesHour = this.avgCustomerHour * this.avgCookieSales;
    // console.log(avgCookiesHour);
  },

};

console.log(paris);





var lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSales: 4.6,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],

  GenRandCustomerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    // console.log(this.avgCustomerHour);
  },

  avgCookiesHour: function(){
    this.cookiesPerHour.push(this.avgCustomerHour() * this.avgCookieSales);
    return this.avgCustomerHour() * this.avgCookieSales;
    // this.avgCookiesHour = this.avgCustomerHour * this.avgCookieSales;
    // console.log(avgCookiesHour);
  },

};

console.log(lima);
