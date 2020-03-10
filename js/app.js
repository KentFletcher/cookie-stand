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
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
    // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      // console.log(ranCustomerPerHour);
      // Getting the avg cookies per hour, based on the random customers per hour
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      console.log(cookiesPerHour);
      this.customersPerHour.push(ranCustomerPerHour);
      console.log(this.customersPerHour);
      this.totalCookies.push(cookiesPerHour);
    }
  },
  write: function(){
    
  }
};

// function salesWrite(){
//   //where I want it to go in HTML
//   var listEl = document.getElementById('list');
//   // creating a list item element
//   var nameEl = document.createElement('p');
//   var salesList = document.createElement('ul');
//   var itemEl = document.createElement('li');

//   nameEl.textContent = this.name;
//   itemEl.textContent = this.hours.length;

//   itemEl.appendChild(nameEl);
//   listEl.appendChild(itemEl);
//   listEl.appendChild(salesList);

//   for (var i = 0; i < this.cookiesTotal.length; i++);{
//     var hourEl = document.createElement('li');
//     salesList.appendChild(hourEl);
//     hourEl.content = this.cookiesTotal[i];
//   }

//   var sumEl = document.createElement('li');
//   sumEl.textContent = 'total : ' + this.cookiesTotal;
//   salesList.appendChild(sumEl);

// }

// salesWrite();
storeSeattle.randCustomerHour();
console.log(storeSeattle);








// var storeTokyo = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSales: 1.2,
//   hoursOpenDay: 14,
//   cookiesTotal: 0,
//   totalCookies: [],
//   customersPerHour: [],

//   randCustomerHour: function(){
//     for (var index = 0; index < this.hoursOpenDay; index++) {
//     // Getting the random customers per hour
//       var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//       console.log(ranCustomerPerHour);
//       // Getting the avg cookies per hour, based on the random customers per hour
//       var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
//       console.log(cookiesPerHour);
//       this.customersPerHour.push(ranCustomerPerHour);
//       console.log(this.customersPerHour);
//       this.totalCookies.push(cookiesPerHour);
//     }
//   },

// };

// storeTokyo.randCustomerHour();






// var storeDubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSales: 3.7,
//   hoursOpenDay: 14,
//   cookiesTotal: 0,
//   totalCookies: [],
//   customersPerHour: [],

//   randCustomerHour: function(){
//     for (var index = 0; index < this.hoursOpenDay; index++) {
//     // Getting the random customers per hour
//       var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//       console.log(ranCustomerPerHour);
//       // Getting the avg cookies per hour, based on the random customers per hour
//       var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
//       console.log(cookiesPerHour);
//       this.customersPerHour.push(ranCustomerPerHour);
//       console.log(this.customersPerHour);
//       this.totalCookies.push(cookiesPerHour);
//     }
//   },

// };

// storeDubai.randCustomerHour();








// var storeParis = {
//   name: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSales: 2.3,
//   hoursOpenDay: 14,
//   cookiesTotal: 0,
//   totalCookies: [],
//   customersPerHour: [],

//   randCustomerHour: function(){
//     for (var index = 0; index < this.hoursOpenDay; index++) {
//     // Getting the random customers per hour
//       var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//       console.log(ranCustomerPerHour);
//       // Getting the avg cookies per hour, based on the random customers per hour
//       var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
//       console.log(cookiesPerHour);
//       this.customersPerHour.push(ranCustomerPerHour);
//       console.log(this.customersPerHour);
//       this.totalCookies.push(cookiesPerHour);
//     }
//   },

// };

// storeParis.randCustomerHour();




// var storeLima = {
//   name: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSales: 4.6,
//   hoursOpenDay: 14,
//   cookiesTotal: 0,
//   totalCookies: [],
//   customersPerHour: [],

//   randCustomerHour: function(){
//     for (var index = 0; index < this.hoursOpenDay; index++) {
//     // Getting the random customers per hour
//       var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//       console.log(ranCustomerPerHour);
//       // Getting the avg cookies per hour, based on the random customers per hour
//       var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
//       console.log(cookiesPerHour);
//       this.customersPerHour.push(ranCustomerPerHour);
//       console.log(this.customersPerHour);
//       this.totalCookies.push(cookiesPerHour);
//     }
//   },

// };

// storeLima.randCustomerHour();
