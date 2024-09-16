// function sum(x, y) {            //callback is sum in this function
//   console.log(x + y);
// }
// function callback(a, b, myfunc) {
//   myfunc(a, b);
// }
// callback(1, 2, sum);

// function sum(a, b) {
//   console.log(a + b);
// }
// function call(x, y, T) {
//   let c = x * y;
//   T(x, c);
// }
// sum(2, 4, sum);

// const sum = (a, b, x) => {
//   let y = a + b;
//   x(y, b);
// };
// sum(5, 1, (m, n) => {
//   console.log(m + n);
// });

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((item) => {
//   console.log(item);
// });

// let arr = [2, 3, 5, 7, 6];
// arr.forEach((item) => {
//   console.log(item * 2);
// });

// let count = 0;
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((item) => {
//   if (item % 2 == 0) {
//     count++;
//     console.log(item);
//   }
// });
// console.log("even no ", count);

// let count = 0;
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((item) => {
//   if (item % 2 == 1) {
//     count++;
//     console.log(item);
//   }
// });
// console.log("Total odd number is ", count);

// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.map((item) => {         //map
//   return item * 2;
// });
// console.log(newarr);

let arr = [1, 2, 3, 4, 5];
let newarr = arr.filter((item) => {
  return item > 3;
});
console.log(newarr);
