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
  this.avgSalesPerHour();
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

  cellEl.textContent = this.name;
  tableEl.appendChild(rowEl);
  rowEl.appendChild(cellEl);

  var sumOfCookies = 0;
  /**loop to get my totals for each store */
  for(var i = 0; i < this.cookiesStorePerHour.length; i++){
    cellEl = document.createElement('td');
    cellEl.textContent = this.cookiesStorePerHour[i];
    rowEl.appendChild(cellEl);
    sumOfCookies = sumOfCookies + this.cookiesStorePerHour[i];
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

  //Loops to pass through my table and total each hour
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

// Giving users the ability to input add new locations of stores to the sales table:
// Needs to take in info from user then add it to the bottom of the table.
var formNewStore = document.getElementById('custAddStore');


formNewStore.addEventListener('submit', custAddStoreInfo);

function custAddStoreInfo(infoInput) {
  infoInput.preventDefault();
  var name = infoInput.target.storeLocation.value;
  var minCustomer = Number(infoInput.target.minCust.value);
  var maxCustomer = Number(infoInput.target.maxCust.value);
  var avgCookiePerCust = Number(infoInput.target.avgCookiePerCust.value);

  new SalmonCookieStore(name, minCustomer, maxCustomer, avgCookiePerCust);
  console.log(allStores);
  showTable();
}


headerRow();
new SalmonCookieStore('Seattle', 23, 65, 6.3);
new SalmonCookieStore('Tokyo', 3, 24, 1.2);
new SalmonCookieStore('Dubai', 11, 38, 3.7);
new SalmonCookieStore('Paris', 20, 38, 2.3);
new SalmonCookieStore('Lima', 2, 16, 4.6);

//Renders out the table with any new added stores and also if a user inputs a new store.
function showTable (){
  var table = document.getElementById('table');
  table.innerHTML = null;

  for ( var i =0; i < allStores.length; i++){
    allStores[i].writeTable();
  }
  totalsPerHour();
}
showTable();
