'use strict';


/*Seattle Location*/

var store1 = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSales: 6.3,
  hoursOpenDay: 14,
  cookiesSum: 0,
  totalCookies: [],
  // customersPerHour: [],
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  /*Method to calculate my random customers and average sales per day and then store in array */
  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
    // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      /**Average cookies sold per per hour*/
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      /**variable storing an array with random customers per hour and average cookies per hour */
      var cookieAndCustomersPerHour = [ranCustomerPerHour, cookiesPerHour];

      return cookieAndCustomersPerHour;
    }
  },

  /** function to calculate my total cookies per day */
  saleTracker: function () {
    for (var i = 0; i < this.hours.length; i++){
      var cookieAndCustomersPerHour = this.randCustomerHour();
      this.totalCookies.push(cookieAndCustomersPerHour[1]);
      this.cookiesSum = (this.cookiesSum + cookieAndCustomersPerHour[1]);
    }
  },

  /** function to write the relevant data to the DOM, to be rendered to out sales web page*/
  write: function () {
    /**where the element is going */
    var listEl = document.getElementById('list');

    /**creating element to append to our list */
    var itemEl = document.createElement('li');
    listEl.appendChild(itemEl);

    /**store name */
    var headEl = document.createElement('p');
    itemEl.appendChild(headEl);
    headEl.textContent = this.name;

    var salesList = document.createElement('ul');
    listEl.appendChild(salesList);

    /** loop to create my rows for sales data */
    for (var i = 0; i < this.totalCookies.length; i++){
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.hours[i] + ': ' + this.totalCookies[i] + ' cookies';
    }

    var sumEl = document.createElement('li');
    salesList.appendChild(sumEl);
    sumEl.textContent = 'Total: ' + this. cookiesSum + ' cookies';
  }
};

store1.saleTracker();
store1.write();


var store2 = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSales: 1.2,
  hoursOpenDay: 14,
  cookiesSum: 0,
  totalCookies: [],
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  /*Method to calculate my random customers and average sales per day and then store in array */
  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
      // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      /**Average cookies sold per per hour*/
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      /**variable storing an array with random customers per hour and average cookies per hour */
      var cookieAndCustomersPerHour = [ranCustomerPerHour, cookiesPerHour];

      return cookieAndCustomersPerHour;
    }
  },

  /** function to calculate my total cookies per day */
  saleTracker: function () {
    for (var i = 0; i < this.hours.length; i++){
      var cookieAndCustomersPerHour = this.randCustomerHour();

      this.totalCookies.push(cookieAndCustomersPerHour[1]);
      this.cookiesSum = (this.cookiesSum + cookieAndCustomersPerHour[1]);
    }
  },

  /** function to write the relevant data to the DOM, to be rendered to out sales web page*/
  write: function () {
  /**where the element is going */
    var listEl = document.getElementById('list');

    /**creating element to append to our list */
    var itemEl = document.createElement('li');
    listEl.appendChild(itemEl);

    /**store name */
    var headEl = document.createElement('p');
    itemEl.appendChild(headEl);
    headEl.textContent = this.name;

    var salesList = document.createElement('ul');
    listEl.appendChild(salesList);

    /** loop to create my rows for sales data */
    for (var i = 0; i < this.totalCookies.length; i++){
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.hours[i] + ': ' + this.totalCookies[i] + ' cookies';
    }

    var sumEl = document.createElement('li');
    salesList.appendChild(sumEl);
    sumEl.textContent = 'Total: ' + this. cookiesSum + ' cookies';
  }
};

store2.saleTracker();
store2.write();


var store3 = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSales: 3.7,
  hoursOpenDay: 14,
  cookiesSum: 0,
  totalCookies: [],
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  /*Method to calculate my random customers and average sales per day and then store in array */
  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
    // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      /**Average cookies sold per per hour*/
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      console.log(cookiesPerHour);
      /**variable storing an array with random customers per hour and average cookies per hour */
      var cookieAndCustomersPerHour = [ranCustomerPerHour, cookiesPerHour];

      return cookieAndCustomersPerHour;
    }
  },

  /** function to calculate my total cookies per day */
  saleTracker: function () {
    for (var i = 0; i < this.hours.length; i++){
      var cookieAndCustomersPerHour = this.randCustomerHour();

      this.totalCookies.push(cookieAndCustomersPerHour[1]);
      this.cookiesSum = (this.cookiesSum + cookieAndCustomersPerHour[1]);
    }
  },

  /** function to write the relevant data to the DOM, to be rendered to out sales web page*/
  write: function () {
    /**where the element is going */
    var listEl = document.getElementById('list');

    /**creating element to append to our list */
    var itemEl = document.createElement('li');
    listEl.appendChild(itemEl);

    /**store name */
    var headEl = document.createElement('p');
    itemEl.appendChild(headEl);
    headEl.textContent = this.name;

    var salesList = document.createElement('ul');
    listEl.appendChild(salesList);

    /** loop to create my rows for sales data */
    for (var i = 0; i < this.totalCookies.length; i++){
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.hours[i] + ': ' + this.totalCookies[i] + ' cookies';
    }

    var sumEl = document.createElement('li');
    salesList.appendChild(sumEl);
    sumEl.textContent = 'Total: ' + this. cookiesSum + ' cookies';
  }
};


store3.saleTracker();
store3.write();


var store4 = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSales: 2.3,
  hoursOpenDay: 14,
  cookiesSum: 0,
  totalCookies: [],
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  /*Method to calculate my random customers and average sales per day and then store in array */
  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
      // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      /**Average cookies sold per per hour*/
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      console.log(cookiesPerHour);
      /**variable storing an array with random customers per hour and average cookies per hour */
      var cookieAndCustomersPerHour = [ranCustomerPerHour, cookiesPerHour];

      return cookieAndCustomersPerHour;
    }
  },

  /** function to calculate my total cookies per day */
  saleTracker: function () {
    for (var i = 0; i < this.hours.length; i++){
      var cookieAndCustomersPerHour = this.randCustomerHour();

      this.totalCookies.push(cookieAndCustomersPerHour[1]);
      this.cookiesSum = (this.cookiesSum + cookieAndCustomersPerHour[1]);
    }
  },

  /** function to write the relevant data to the DOM, to be rendered to out sales web page*/
  write: function () {
  /**where the element is going */
    var listEl = document.getElementById('list');

    /**creating element to append to our list */
    var itemEl = document.createElement('li');
    console.log(itemEl);
    listEl.appendChild(itemEl);

    /**store name */
    var headEl = document.createElement('p');
    itemEl.appendChild(headEl);
    headEl.textContent = this.name;

    var salesList = document.createElement('ul');
    console.log(itemEl);
    listEl.appendChild(salesList);

    /** loop to create my rows for sales data */
    for (var i = 0; i < this.totalCookies.length; i++){
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.hours[i] + ': ' + this.totalCookies[i] + ' cookies';
    }

    var sumEl = document.createElement('li');
    salesList.appendChild(sumEl);
    sumEl.textContent = 'Total: ' + this. cookiesSum + ' cookies';
  }
};


store4.saleTracker();
store4.write();



var store5 = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSales: 4.6,
  hoursOpenDay: 14,
  cookiesSum: 0,
  totalCookies: [],
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  /*Method to calculate my random customers and average sales per day and then store in array */
  randCustomerHour: function(){
    for (var index = 0; index < this.hoursOpenDay; index++) {
      // Getting the random customers per hour
      var ranCustomerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      /**Average cookies sold per per hour*/
      var cookiesPerHour = Math.floor(ranCustomerPerHour * this.avgCookieSales);
      console.log(cookiesPerHour);
      /**variable storing an array with random customers per hour and average cookies per hour */
      var cookieAndCustomersPerHour = [ranCustomerPerHour, cookiesPerHour];

      return cookieAndCustomersPerHour;
    }
  },

  /** function to calculate my total cookies per day */
  saleTracker: function () {
    for (var i = 0; i < this.hours.length; i++){
      var cookieAndCustomersPerHour = this.randCustomerHour();

      this.totalCookies.push(cookieAndCustomersPerHour[1]);
      this.cookiesSum = (this.cookiesSum + cookieAndCustomersPerHour[1]);
    }
  },

  /** function to write the relevant data to the DOM, to be rendered to out sales web page*/
  write: function () {
  /**where the element is going */
    var listEl = document.getElementById('list');

    /**creating element to append to our list */
    var itemEl = document.createElement('li');
    listEl.appendChild(itemEl);

    /**store name */
    var headEl = document.createElement('p');
    itemEl.appendChild(headEl);
    headEl.textContent = this.name;

    var salesList = document.createElement('ul');
    listEl.appendChild(salesList);

    /** loop to create my rows for sales data */
    for (var i = 0; i < this.totalCookies.length; i++){
      var hourEl = document.createElement('li');
      salesList.appendChild(hourEl);
      hourEl.textContent = this.hours[i] + ': ' + this.totalCookies[i] + ' cookies';
    }
    console.log(hourEl);

    var sumEl = document.createElement('li');
    salesList.appendChild(sumEl);
    sumEl.textContent = 'Total: ' + this. cookiesSum + ' cookies';
  }
};


store5.saleTracker();
store5.write();
