'use strict';


/*Seattle Location*/

var seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSales: 6.3,
  hoursOpenDay: 14,
  dailyTotal: 0,
  avgCookiesDaily: 0,
  avgCustomerHour: 0,
  cookiesPerHour: [],
  customersPerHour: [],

  RandCustomerHour: function(){
      Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    }
    
    // console.log(this.avgCustomerHour);
  },

  AvgCookiesDaily = function(){
  for (let index = 0; index < this.hoursOpenDay; index++) {
    var numCustomers = RandCustomerHour();
    var cookiesPerHour= numCustomers * this.avgCookieSales;
    this.cookiesPerHour.push(cookiesPerHour);
  }
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








var dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSales: 3.7,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],









var paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSales: 2.3,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],






var lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSales: 4.6,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],