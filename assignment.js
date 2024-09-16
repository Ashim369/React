// // 1. Question: Write a function that adds the number `7` at the end of the array `let arr = [1, 2, 3, 4]` using
// // the `push` method. What is the new array?
// let a = [1, 2, 3, 4];
// function add() {
//   let b = a.push(7);
//   console.log(a);
// }
// add();

// // 2. Question: Given `let arr = ['apple', 'banana']`, use the `pop` method to remove the last element. What is
// // the modified array?
// let arr = ["apple", "banana"];
// let newarr = arr.pop();
// console.log(arr);

// // 3. Question: Use the `shift` method to remove the first element from `let arr = [10, 20, 30, 40]`. What
// // does the array look like afterward?
// let arr = [10, 20, 30, 40];
// let newarr = arr.shift();
// console.log(arr);

// // 4. Question: Write a function that adds `'start'` at the beginning of `let arr = ['middle', 'end']` using the
// // `unshift` method. What is the new array?
// let arr = ["middle", "end"];
// function add() {
//   let newarr = arr.unshift("start");
//   console.log(arr);
// }
// add();

// // 5. Question: Convert `let arr = ['one', 'two', 'three']` to a string using the `toString` method. What is the
// // resulting string?
// let arr = ["one", "two", "three"];
// let newarr = arr.toString();
// console.log(newarr);

// // 6. Question: Given `let arr = ['cat', 'dog']`, use the `concat` method to combine it with `['fish', 'bird']`.
// // What is the resulting array?
// let arr = ["cat", "dog"];
// let a = ["fish", "bird"];
// let newarr = arr.concat(a);
// console.log(newarr);

// // 7. Question: Use the `slice` method to extract the first two elements from `let arr = ['red', 'green', 'blue']`.
// // What does the new array look like?
// let arr = ["red", "green", "blue"];
// let newarr = arr.slice(0, 2);
// console.log(newarr);

// // 8. Question: Write a function that removes the last element from `let arr = ['x', 'y', 'z']` and then adds `'a'`
// // at the beginning using the `unshift` method. What is the final array?
// let arr = ["x", "y", "z"];
// function remove() {
//   let newarr = arr.pop();
//   let narray = arr.unshift("a");
//   console.log(arr);
// }
// remove();

// // 9. Question: Use the `toString` method to convert `let arr = [100, 200, 300]` to a string, and then find the
// // length of the resulting string. What is the length?
// let arr = [100, 200, 300];
// let newarr = arr.toString();
// let a = newarr.length;
// console.log(a);

// // 10. Question: Write a function that uses the `push` method to add `'orange'` and `'grape'` to the end of `let
// // arr = ['apple', 'banana']`. What is the new array?
// let arr = ["apple", "banana"];
// function push() {
//   let newarr = arr.push("orange", "grape");
//   console.log(arr);
// }
// push();

// // 11. Question: Use the `shift` method to remove the first element from `let arr = ['sun', 'moon', 'stars']`.
// // What is the modified array?
// let arr = ["sun", "moon", "stars"];
// let newarr = arr.shift();
// console.log(arr);

// // 12. Question: Write a function that adds `42` at the beginning of `let arr = [7, 14, 21]` using the `unshift`
// // method. What is the resulting array?
// let arr = [7, 14, 21];
// function add() {
//   let newarr = arr.unshift(42);
//   console.log(arr);
// }
// add();

// // 13. Question: Given `let arr = [5, 10, 15, 20]`, use the `pop` method to remove the last element and store
// // it in a variable. What is the value of the variable?
// let arr = [5, 10, 15, 20];
// let newarr = arr.pop();
// let a = newarr;
// console.log(a);
// console.log(arr);

// // 14. Question: Convert `let arr = ['hello', 'world']` to a string using the `toString` method, and then split the
// // string back into an array using `split(',')`. What is the resulting array?
// let arr = ["hello", "world"];
// let newarr = arr.toString();
// console.log(newarr);
// console.log(newarr.substring(0, 4));

// console.log(newarr);
// let narray = newarr.split(0, 3);
// console.log(narray);
// console.log(arr);

// // 15. Question: Use the `concat` method to combine `let arr1 = ['x', 'y']` and `let arr2 = [1, 2]`. What is the
// // resulting array?
// let arr1 = ["x", "y"];
// let arr2 = [1, 2];
// let arr = arr1.concat(arr2);
// console.log(arr);

// // 16. Question: Write a function that adds `99` at the end of `let arr = [1, 2, 3, 4]` using the `push` method,
// // and then removes the first element using the `shift` method. What is the final array?
// let arr = [1, 2, 3, 4];
// function array() {
//   let newarr = arr.push(99);
//   console.log(arr);
//   let a = arr.shift();
//   console.log(arr);
// }
// array();

// // 17. Question: Use the `slice` method to extract the last two elements from `let arr = ['a', 'b', 'c', 'd']`. What
// // is the resulting array?
// let arr = ["a", "b", "c", "d"];
// let newarr = arr.slice(2);
// console.log(newarr);

// // 18. Question: Write a function that adds `'lion'` and `'tiger'` at the beginning of `let arr = ['elephant',
// //     'giraffe']` using the `unshift` method. What is the new length of the array?
// let arr = ["elephant", "giraffe"];
// function add() {
//   let newarr = arr.unshift("lion", "tiger");
//   console.log(arr);
// }
// add();

// // 19. Question: Convert `let arr = [20, 30, 40]` to a string using the `toString` method, and then convert the
// // string back to an array using `split(',')`. What is the final array?
// let arr = [20, 30, 40];
// let a = arr.toString();
// let newarr = a.split();
// console.log(arr);

// // 20. Question: Use the `push` method to add `'grape'` to `let arr = ['apple', 'banana', 'orange']`, and then use
// // the `pop` method to remove the last element. What is the resulting array?
// let arr = ["apple", "banana", "orange"];
// let newarr = arr.pop();
// console.log(arr);

// //create a function that will take an array and count the total number of even number of that array
// // let arr = ;   // shidai yehi diye ni hunxa tara call garda ni hunxa
// let count = 0;
// function even(arr) {
//   let a = arr.length;
//   for (i = 0; i < a; i++) {
//     if (arr[i] % 2 == 0) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// even([23, 42, 546, 243, 77, 33, 45, 33, 34, 56]);

// let str = "dajsfgfgfjs";
// let a = str.length;
// console.log(a);

// let arr = ["fsf", "faf", "geg", "tyu", "fsagj"];
// let a = arr.length;
// console.log(a);

let s = 0;
function sum(arr) {
  let a = arr.length;
  for (i = 0; i < a; i++) {
    if (arr[i] % 2 == 0) {
      s = s + arr[i];
    }
  }
  console.log(s);
}
sum([1, 2, 3, 5, 4]);

// let s = 0;
// function sum(arr) {
//   let a = arr.length;
//   for (i = 0; i < a; i++) {
//     if (arr[i] % 2 == 1) {
//       s = s + arr[i];
//     }
//   }
//   console.log(s);
// }
// sum([1, 2, 3, 5, 4]);
