'use strict';


/*Seattle Location*/

var store1 = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSales: 6.3,
  hoursOpenDay: 14,
  cookiesTotal: 0,
  totalCookies: [],
  customersPerHour: [],
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  /*Method to calculate my random customers and average sales per day and then store in array */
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

  /** function to calculate my total cookies per store */
  sumCookiesTotal: function(){
    for (var index = 0; index< this.totalCookies.length; index)
      this.cookiesTotal = this.cookiesTotal + this.totalCookies[index];
    console.log(this.cookiesTotal);
  },

  write: function(){
    var listEl = document.getElementById('list');
    var labelEl = document.createElement('tr');
    listEl.appendChild(labelEl);
    console.log(labelEl);

    // var time =document.createElement('tr');
    // labelEl.appendChild(time);
    // console.log(time);
    // time.textContent = this.hours;
    var head = document.createElement('td');
    labelEl.appendChild(head);
    console.log(head);
    head.textContent = this.name;
    console.log(head);

    for (var index = 0; index < this.totalCookies.length; index++){
      var cellRows = document.createElement('td');
      labelEl.appendChild(cellRows);
      cellRows.textContent = this.totalCookies[index];
    }
  }
};

store1.sumCookiesTotal();
store1.randCustomerHour();
console.log(store1);
store1.write();








var store2 = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSales: 1.2,
  hoursOpenDay: 14,
  cookiesTotal: 0,
  totalCookies: [],
  customersPerHour: [],


  /*Method to calculate my random customers and average sales per day and then store in array */
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
  /** function to calculate my total cookies per store */
  sumCookiesTotal: function(){
    for (var index = 0; index< this.totalCookies.length; index)
      this.cookiesTotal = this.cookiesTotal + this.totalCookies[index];
    console.log(this.cookiesTotal);
  },

  write: function(){
    var listEl = document.getElementById('list');
    var labelEl = document.createElement('tr');
    listEl.appendChild(labelEl);
    console.log(labelEl);
    var head = document.createElement('td');
    labelEl.appendChild(head);
    console.log(head);
    head.textContent = this.name;
    console.log(head);

    for (var index = 0; index < this.totalCookies.length; index++){
      var cellRows = document.createElement('td');
      labelEl.appendChild(cellRows);
      cellRows.textContent = this.totalCookies[index];
    }
  }
};

store2.sumCookiesTotal();
store2.randCustomerHour();
console.log(store2);
store2.write();







var store3 = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSales: 3.7,
  hoursOpenDay: 14,
  cookiesTotal: 0,
  totalCookies: [],
  customersPerHour: [],

  /*Method to calculate my random customers and average sales per day and then store in array */
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
  /** function to calculate my total cookies per store */
  sumCookiesTotal: function(){
    for (var index = 0; index< this.totalCookies.length; index)
      this.cookiesTotal = this.cookiesTotal + this.totalCookies[index];
    console.log(this.cookiesTotal);
  },

  write: function(){
    var listEl = document.getElementById('list');
    var labelEl = document.createElement('tr');
    listEl.appendChild(labelEl);
    console.log(labelEl);
    var head = document.createElement('td');
    labelEl.appendChild(head);
    console.log(head);
    head.textContent = this.name;
    console.log(head);

    for (var index = 0; index < this.totalCookies.length; index++){
      var cellRows = document.createElement('td');
      labelEl.appendChild(cellRows);
      cellRows.textContent = this.totalCookies[index];
    }
  }
};

store3.sumCookiesTotal();
store3.randCustomerHour();
console.log(store3);
store3.write();







var store4 = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSales: 2.3,
  hoursOpenDay: 14,
  cookiesTotal: 0,
  totalCookies: [],
  customersPerHour: [],

  /*Method to calculate my random customers and average sales per day and then store in array */
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
  /** function to calculate my total cookies per store */
  sumCookiesTotal: function(){
    for (var index = 0; index< this.totalCookies.length; index)
      this.cookiesTotal = this.cookiesTotal + this.totalCookies[index];
    console.log(this.cookiesTotal);
  },

  write: function(){
    var listEl = document.getElementById('list');
    var labelEl = document.createElement('tr');
    listEl.appendChild(labelEl);
    console.log(labelEl);
    var head = document.createElement('td');
    labelEl.appendChild(head);
    console.log(head);
    head.textContent = this.name;
    console.log(head);

    for (var index = 0; index < this.totalCookies.length; index++){
      var cellRows = document.createElement('td');
      labelEl.appendChild(cellRows);
      cellRows.textContent = this.totalCookies[index];
    }
  }
};

store4.sumCookiesTotal();
store4.randCustomerHour();
console.log(store4);
store4.write();




var store5 = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSales: 4.6,
  hoursOpenDay: 14,
  cookiesTotal: 0,
  totalCookies: [],
  customersPerHour: [],

  /*Method to calculate my random customers and average sales per day and then store in array */
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
  /** function to calculate my total cookies per store */
  sumCookiesTotal: function(){
    for (var index = 0; index< this.totalCookies.length; index)
      this.cookiesTotal = this.cookiesTotal + this.totalCookies[index];
    console.log(this.cookiesTotal);
  },

  write: function(){
    var listEl = document.getElementById('list');
    var labelEl = document.createElement('tr');
    listEl.appendChild(labelEl);
    console.log(labelEl);
    var head = document.createElement('td');
    labelEl.appendChild(head);
    console.log(head);
    head.textContent = this.name;
    console.log(head);

    for (var index = 0; index < this.totalCookies.length; index++){
      var cellRows = document.createElement('td');
      labelEl.appendChild(cellRows);
      cellRows.textContent = this.totalCookies[index];
    }
  }
};

store5.sumCookiesTotal();
store5.randCustomerHour();
console.log(store5);
store5.write();
