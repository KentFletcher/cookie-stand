'use strict';


/*Seattle Location*/

var storeSeattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSales: 6.3,
  hoursOpenDay: 14,
  cookiesTotal: 0,
  totalCookies: [],
  customersPerHour: [],

  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
    // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      console.log(ranCustomerPerHour);
      // Getting the avg cookies per hour, based on the random customers per hour
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      console.log(cookiesPerHour);
      this.customersPerHour.push(ranCustomerPerHour);
      console.log(this.customersPerHour);
      this.totalCookies.push(cookiesPerHour);
    }
  },

};

storeSeattle.randCustomerHour();
console.log(storeSeattle);


// var storeAverage = document.getElementById('Seattle');

// for (let index = 0; index < this.hoursOpenDay; index++) {








var storeTokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSales: 1.2,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],

  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
    // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      console.log(ranCustomerPerHour);
      // Getting the avg cookies per hour, based on the random customers per hour
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      console.log(cookiesPerHour);
      this.customersPerHour.push(ranCustomerPerHour);
      console.log(this.customersPerHour);
      this.totalCookies.push(cookiesPerHour);
    }
  },

};

storeTokyo.randCustomerHour();






var storeDubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSales: 3.7,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],

  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
    // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      console.log(ranCustomerPerHour);
      // Getting the avg cookies per hour, based on the random customers per hour
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      console.log(cookiesPerHour);
      this.customersPerHour.push(ranCustomerPerHour);
      console.log(this.customersPerHour);
      this.totalCookies.push(cookiesPerHour);
    }
  },

}

storeDubai.randCustomerHour();








var storeParis = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSales: 2.3,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],

  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
    // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      console.log(ranCustomerPerHour);
      // Getting the avg cookies per hour, based on the random customers per hour
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      console.log(cookiesPerHour);
      this.customersPerHour.push(ranCustomerPerHour);
      console.log(this.customersPerHour);
      this.totalCookies.push(cookiesPerHour);
    }
  },

};

storeParis.randCustomerHour();




var storeLima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSales: 4.6,
  hoursOpenDay: 14,
  dailyTotal: 0,
  hours: ['6am', '7am'],
  cookiesPerHour: [],

  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
    // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      console.log(ranCustomerPerHour);
      // Getting the avg cookies per hour, based on the random customers per hour
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      console.log(cookiesPerHour);
      this.customersPerHour.push(ranCustomerPerHour);
      console.log(this.customersPerHour);
      this.totalCookies.push(cookiesPerHour);
    }
  },

};

storeLima.randCustomerHour();
