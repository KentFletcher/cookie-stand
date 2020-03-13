'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function SalmonCookieStore (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCustomer = minCust;
  this.maxCustomer = maxCust;
  this.avgCookieSales = avgCookie;

  var cookiesPerHour = this.avgSalesPerHour();
  console.log(cookiesPerHour);

  this.salesPerHour = cookiesPerHour.data;
  this.totalCookiesSold = cookiesPerHour.sum;

  // var write = this.writeTable();
  this.hoursOpenDay = 14;
  // this.cookies = cookiesPerHour.sum;
  // console.log(totalCookiesSold);
}


SalmonCookieStore.prototype.avgSalesPerHour = function(){
  var totalCookies = [];
  console.log(totalCookies);
  var cookiesSum = 0;
  for (var index = 0; index < hours.length; index++) {
    // Getting the random customers per hour
    var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    /**Average cookies sold per per hour*/
    var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
    console.log(cookiesPerHour);
    /**Sum of all cookies per day */
    cookiesSum = (cookiesSum + cookiesPerHour);
    totalCookies.push(cookiesPerHour);
    // console.log(cookiesSum);
  }
  return{
    data: totalCookies,
    sum: cookiesSum
  };
};

/**Write my DOM down here */
/** function to write the relevant data to the DOM, to be rendered to out sales web page*/

SalmonCookieStore.prototype.writeTable = function(){
  var tableEl = document.getElementById('table');
  var rowEl = document.createElement('tr');
  var cellEl = document.createElement('td');
  console.log(rowEl);
  cellEl.textContent = this.name;
  tableEl.appendChild(rowEl);
  rowEl.appendChild.cellEl;
  console.log(cellEl);

  for(var i = 0, i < this.salesPerHour.length; i++){
    cells = document.createElement('td');
     rowEl.appendChild(cells);
    cells.textContent = this.salesPerHour[i];
  }

};



var Seattle = new SalmonCookieStore('Seattle', 23, 65, 6.3);
var Tokyo = new SalmonCookieStore('Tokyo', 3, 24, 1.2);
var Dubai = new SalmonCookieStore('Dubai', 11, 38, 3.7);
var Paris = new SalmonCookieStore('Paris', 20, 38, 2.3);
var Lima = new SalmonCookieStore('Lima', 2, 16, 4.6);

Seattle.writeTable();
Tokyo.writeTable();
Dubai.writeTable();
Paris.writeTable();
Lima.writeTable();
// console.log(Seattle);


// var store2 = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSales: 1.2,
//   hoursOpenDay: 14,
//   cookiesSum: 0,
//   totalCookies: [],
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

//   /*Method to calculate my random customers and average sales per day and then store in array */
//   randCustomerHour: function(){
//     for (var index = 0; index < this.hoursOpenDay; index++) {
//       // Getting the random customers per hour
//       var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//       /**Average cookies sold per per hour*/
//       var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
//       /**variable storing an array with random customers per hour and average cookies per hour */
//       var cookieAndCustomersPerHour = [ranCustomerPerHour, cookiesPerHour];

//       return cookieAndCustomersPerHour;
//     }
//   },

//   /** function to calculate my total cookies per day */
//   saleTracker: function () {
//     for (var i = 0; i < this.hours.length; i++){
//       var cookieAndCustomersPerHour = this.randCustomerHour();

//       this.totalCookies.push(cookieAndCustomersPerHour[1]);
//       this.cookiesSum = (this.cookiesSum + cookieAndCustomersPerHour[1]);
//     }
//   },

//   /** function to write the relevant data to the DOM, to be rendered to out sales web page*/
//   write: function () {
//   /**where the element is going */
//     var listEl = document.getElementById('list');

//     /**creating element to append to our list */
//     var itemEl = document.createElement('li');
//     listEl.appendChild(itemEl);

//     /**store name */
//     var headEl = document.createElement('p');
//     itemEl.appendChild(headEl);
//     headEl.textContent = this.name;

//     var salesList = document.createElement('ul');
//     listEl.appendChild(salesList);

//     /** loop to create my rows for sales data */
//     for (var i = 0; i < this.totalCookies.length; i++){
//       var hourEl = document.createElement('li');
//       salesList.appendChild(hourEl);
//       hourEl.textContent = this.hours[i] + ': ' + this.totalCookies[i] + ' cookies';
//     }

//     var sumEl = document.createElement('li');
//     salesList.appendChild(sumEl);
//     sumEl.textContent = 'Total: ' + this. cookiesSum + ' cookies';
//   }
// };

// store2.saleTracker();
// store2.write();