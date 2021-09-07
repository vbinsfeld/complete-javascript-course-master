"use strict";

// let max_temperatures = [17, 21, 23];
let max_temperatures = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("..." + arr[i] + "C in " + (i + 1) + " day(s) ...");
  }
};

console.log(printForecast(max_temperatures));
