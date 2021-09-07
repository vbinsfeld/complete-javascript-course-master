"use strict";

//FUNCTION RECEIVES ONE ARRAYS AND GIVES BACK AMPLITUDE:

// let temperatures = [3, -2, -6, , -1, , "error", 9, 13, 17, 15, 14, 9, 5];
// let maxiNumber = temperatures[0];
// let miniNumber = temperatures[0];

// const calcAmplitude = function (temps) {
//   for (let i = 0; i < temperatures.length; i++) {
//     if (typeof temps[i] != "number") continue;

//     if (maxiNumber < temperatures[i]) {
//       maxiNumber = temperatures[i];
//     }
//   }

//   for (let i = 0; i < temperatures.length; i++) {
//     if (miniNumber > temperatures[i]) {
//       miniNumber = temperatures[i];
//     }
//   }

//   return maxiNumber - miniNumber;
// };

// console.log("the amplitude is: " + calcAmplitude(temperatures));

//FUNCTION RECEIVES TWO ARRAYS AND GIVES BACK AMPLITUDE:

// let temperatures1 = [3, -2, -25, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let temperatures2 = [3, -2, -15, -1, "error", 9, 13, 17, 15, 14, 9, 20];
// let maxiNumber = temperatures1[0];
// let miniNumber = temperatures1[0];

// const calcAmplitude = function (temps1, temps2) {
//   for (let i = 0; i < temperatures1.length; i++) {
//     if (typeof temps1[i] != "number") continue;
//     if (maxiNumber < temperatures1[i]) {
//       maxiNumber = temperatures1[i];
//     } else if (maxiNumber < temperatures2[i]) {
//       maxiNumber = temperatures2[i];
//     }
//   }

//   for (let i = 0; i < temperatures1.length; i++) {
//     if (miniNumber > temperatures1[i]) {
//       miniNumber = temperatures1[i];
//     } else if (miniNumber > temperatures2[i]) {
//       miniNumber = temperatures2[i];
//     }
//   }

//   return maxiNumber - miniNumber;
// };

// console.log("the amplitude is: " + calcAmplitude(temperatures1, temperatures2));

//FUNCTION RECEIVES TWO ARRAYS AND GIVES BACK AMPLITUDE: **** USING MERGE *****

// let temperatures1 = [3, -2, -25, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let temperatures2 = [3, -2, -15, -1, "error", 9, 13, 17, 15, 14, 9, 20];
// let arraysJuntos = temperatures1.concat(temperatures2);
// let maxiNumber = arraysJuntos[0];
// let miniNumber = arraysJuntos[0];

// const calcAmplitude = function (temps) {
//   for (let i = 0; i < arraysJuntos.length; i++) {
//     if (typeof temps[i] != "number") continue;

//     if (maxiNumber < arraysJuntos[i]) {
//       maxiNumber = arraysJuntos[i];
//     }
//   }

//   for (let i = 0; i < arraysJuntos.length; i++) {
//     if (miniNumber > arraysJuntos[i]) {
//       miniNumber = arraysJuntos[i];
//     }
//   }

//   return maxiNumber - miniNumber;
// };

// console.log("the amplitude is: " + calcAmplitude(arraysJuntos));
