// numbers 1
//=============================================\\

// const numbers = [9, 5, 3, 4, 5, 6, 7, 2, 1];

// function compareNumbers(arr) {
//     var arr = arr.sort(function(a, b) { return a - b })
//     console.log(arr);
// };
// compareNumbers(numbers);


//================================================\\
// numbers 2
//================================================\\


// array = [NaN, 77, 46, false, NaN, 2, '', undefined, 86, null];

// function filterFalse(arr) {
//     return arr.filter(function(v) { return !!v; });
// }
// console.log(filterFalse(array));


//================================================\\
// numbers 3
//================================================\\

// const logs = [{
//             name: 'Sergey',
//             age: 25
//         },
//         {
//             name: 'Andrey',
//             age: 42
//         },
//         {
//             name: 'Vasa',
//             age: 35
//         }
//     ];
//     console.log(logs);

//     function propertyValue(array, key) {
//         const arr = [];
//         let index = -1;
//         let item;

//         while (++index < array.length) {
//             item = array[index];

//             if (item.hasOwnProperty(key)) {
//                 arr[arr.length] = item[key];
//             }
//         }

//         return arr;
//     }
//     console.table(propertyValue(logs, 'name'));
//     console.table(propertyValue(logs, 'age'));


//================================================\\
// numbers 4 numbers 6
//================================================\\

// const ganja = ['nut', 'banana', 'dog', 'cat', 'sea', 'canary'];

// var ganjaLength = ganja.map(function(piece) {
//     return piece.length;
// });

// console.log(ganjaLength);

//================================================\\
// numbers 5
//================================================\\


// numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// function currentSums(numbers) {
//     var result = [];

//     numbers.reduce(function(sum, current, i) {
//         return result[i] = sum + current;
//     }, 0);

//     console.log(result);
// }

// console.log(currentSums(numbers));

//

//================================================\\
// numbers 7
//================================================\\

var d = document,
    inp = d.getElementsByClassName('field'),
    mas = [];

function save() {
    for (var i = 0; i < inp.length; i++) {
        mas[i] = inp[i].value;
    }
    console.log(mas);
}
save(); //-<Это победа / в нем гвоздь!!!!


// Напряг 
// document.writeln('Упражнения №7 .......Логику понимаю как делать но оно не БомБом чёта 😔');

// let inputBy = document.querySelector('.input-in');
// let button = document.querySelector('button');
// let ary = [];
// console.log(ary);

// button.onclick = function srtBy() {
//     inp = document.getElementsByClassName('.input-in');
//     let ary = [];

//     function save() {
//         for (var i = 0; i < inp.length; i++) {
//             mas[i] = inp[i].value;
//         }
//     }
// }




// let gsE = inputBy.value;
// for (let i = inputBy.length - 1; i >= 0; i--) {
//     ary.push(inputBy[i]);
//     console.log(srtBy);
///Ломился на сортировку в массиве =)
// const wrr = ['GSPD', 'Lil Peep', 'linkin park', 'lil Fill', 'Garik'];
// const newWrr = [];
// for (let i = wrr.length - 1; i >= 0; i--) {
//     newWrr.push(wrr[i]);

// }
// console.log(wrr);
// console.log(newWrr);

// inp = d.getElementsByClassName('field');
// var mas = [];
// inp.push.sav(mas)
// console.log(mas);