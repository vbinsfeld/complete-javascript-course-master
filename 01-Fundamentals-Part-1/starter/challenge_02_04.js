'use strict';

const calcAverage = function (arr) {
    let somaDoArray = 0;

    for (let i = 0; i < arr.lenght; i++) {
        somaDoArray = somaDoArray + arr[i]
    }

    return somaDoArray / arr.lenght;

}

// let total = []

// for (i = 0; i < 2; i++) {
//     let bills = []
//     let tips = []


//     bills[i] = (prompt('Type bill number ' + i + ' here:'))
//     console.log('Yout typed R$ ' + bills[i] + ',00 for bill number ' + i)


//     if (bills[i] >= 50 && bills[i] <= 300) {
//         tips[i] = (bills[i] * 0.15)
//         total[i] = bills[i] + tips[i]
//         console.log(total[i])
//     } else {
//         tips[i] = (bills[i] * 0.20);
//         total[i] = bills[i] + tips[i]
//         console.log(total[i])
//     }

// }

// console.log(total)
console.log(calcAverage([2, 3, 6]))
