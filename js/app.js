'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];

function SalmonCookieStore (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCustomer = minCust;
  this.maxCustomer = maxCust;
  this.avgCookieSales = avgCookie;
  this.cookiesStorePerHour = [];
  allStores.push(this);
  // console.log(this.cookiesStorePerHour);
  this.avgSalesPerHour();
  // console.log(cookiesPerHour);
  this.writeTable();
}


SalmonCookieStore.prototype.avgSalesPerHour = function(){
  /**Loop to get my cookie sales per hour at each store */
  for (var index = 0; index < hours.length; index++) {
    // Getting the random customers per hour
    var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    /**Average cookies sold per per hour*/
    var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
    this.cookiesStorePerHour.push(cookiesPerHour);

  }

};

/**Write my DOM down here */
/** prototype to write the name and daily sales data to the DOM, to be rendered to sales web page*/
SalmonCookieStore.prototype.writeTable = function(){
  var tableEl = document.getElementById('table');
  var rowEl = document.createElement('tr');
  var cellEl = document.createElement('td');
  // console.log(rowEl);
  cellEl.textContent = this.name;
  tableEl.appendChild(rowEl);
  rowEl.appendChild(cellEl);
  // console.log(cellEl);
  var sumOfCookies = 0;

  /**loop to get my totals for each store */
  for(var i = 0; i < this.cookiesStorePerHour.length; i++){
    cellEl = document.createElement('td');
    cellEl.textContent = this.cookiesStorePerHour[i];
    rowEl.appendChild(cellEl);
    sumOfCookies = sumOfCookies + this.cookiesStorePerHour[i];
    // console.log(sumOfCookies);
  }
  cellEl = document.createElement('td');
  cellEl.textContent = sumOfCookies;
  rowEl.appendChild(cellEl);
};

/**Write Header for hours */
function headerRow(){
  var headerRow = document.getElementById('table');
  var rowEl = document.createElement('tr');
  var cellEl = document.createElement('td');

  rowEl.appendChild(cellEl);

  for(var i = 0; i < hours.length + 1; i++){
    cellEl = document.createElement('td');
    cellEl.textContent = hours[i];
    rowEl.appendChild(cellEl);
  }

  cellEl.textContent = 'Daily Location Total';
  headerRow.appendChild(rowEl);
}

/**function to write my footer row with daily sales data */
function totalsPerHour(){
  /**Connect to HTML */
  var tableElBottomRow = document.getElementById('table');
  //create row and cell elements
  var rowEl = document.createElement('tr');
  var cellEl = document.createElement('td');

  cellEl.textContent = 'Total';
  tableElBottomRow.appendChild(rowEl);
  rowEl.appendChild(cellEl);
  var dailyAllStores = 0;

  for(var i = 0; i < hours.length; i++){
    var hourlyTotals = 0;


    cellEl = document.createElement('td');
    for(var j = 0; j < allStores.length; j++){
      hourlyTotals = hourlyTotals + allStores[j].cookiesStorePerHour[i];

    }
    cellEl.textContent = hourlyTotals;
    rowEl.appendChild(cellEl);
    dailyAllStores = dailyAllStores + hourlyTotals;
  }

  cellEl = document.createElement('td');
  cellEl.textContent = hourlyTotals;
  rowEl.appendChild(cellEl);
  tableElBottomRow.appendChild(rowEl);
  cellEl.textContent = dailyAllStores;
}

headerRow();
var Seattle = new SalmonCookieStore('Seattle', 23, 65, 6.3);
var Tokyo = new SalmonCookieStore('Tokyo', 3, 24, 1.2);
var Dubai = new SalmonCookieStore('Dubai', 11, 38, 3.7);
var Paris = new SalmonCookieStore('Paris', 20, 38, 2.3);
var Lima = new SalmonCookieStore('Lima', 2, 16, 4.6);

totalsPerHour();

