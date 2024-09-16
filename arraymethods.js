// //Create an object
// let obj = {
//   name: "Ashim",
//   age: 22,
// };
// // console.log("name is ", obj.name); //read
// // console.log("Age is ", obj.age);
// // obj.name = "Hello";
// // console.log(obj.name); //update
// // delete obj.age; //delete an object
// // obj.age = 18;
// // console.log((obj.address = "Kathmandu"));
// // console.log(obj.age);
// obj.phone = 9867456369; //Append an object
// // console.log(obj.phone);
// let id = Symbol(123);
// obj.identity = id;
// console.log(obj);

// let persons = {
//   name: "xyz",
//   phone: {
//     p1: 9852375,
//     p2: 5725724,
//   },
//   sum() {
//     console.log("Hi");
//     return 104;
//   },
// };
// console.log(persons.phone.p2);
// // persons.sum();
// console.log(persons.sum());

// let person = {
//   name: "xyz",
//   mark: [1, 2, 3, 4, 5],
// };
// console.log(person.mark);
// console.log(person.name);

// let person = {
//   name: "Ashim",
//   mark: [
//     {
//       f_sem: [1, 2, 3, 4, 5],
//     },
//   ],
// };
// // console.log(person.mark[0].f_sem);
// // console.log(person.name);
// let sum = 0;
// person.mark[0].f_sem.forEach((item) => {
//   sum = sum + item;
// });
// console.log(sum);

var cat = {
  name: "fluffy",
  activities: ["Play", "eat cat food"],
  catFriends: [
    {
      name: "bar",
      activities: ["be grumpy", "eat bread omlet"],
      weight: 8,
      fur: "white",
    },
    {
      name: "foo",
      activities: ["sleep", "pre-sleep"],
      weight: 3,
    },
  ],
};
// console.log(cat.catFriends[0].activities[0]);
// console.log(cat.catFriends[0].activities[1]);
// console.log(cat.catFriends[1].activities[0]);
// console.log(cat.catFriends[1].activities[1]);
// console.log(cat.catFriends[0].weight + cat.catFriends[1].weight);

// cat.catFriends.forEach((item) => {
//   item.activities.forEach((i) => {
//     console.log(i);
//   });
// });
// let sum = 0;
// cat.catFriends.forEach((item) => {
//   sum = sum + item.weight;
// });
// console.log(sum);

//reduce
// let arr = [1, 2, 3, 4, 5];
// let val = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(val);

// let arr = [1, 2, 3, 4, 5];
// let val = arr.reduce((prev, curr) => {
//   return prev * curr;
// });
// console.log(val);

// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.filter((item) => {
//   return item % 2 == 0;
// });
// console.log(newarr);
// let a = newarr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(a);

class car{
  constructor(name,year)
  {
    this.name = BMW
    this.year = 2024
  }
}
console.log(car)