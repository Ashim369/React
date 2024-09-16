// //class     //Object
// class A{
//     add(){
//         {
//             console.log("Hello")
//         }
//     }
// }
// let B = new A()
// let C = new A()
// B.add()
// C.add()
// console.log(B)

// class A{
//     constructor(){
//         console.log("Hi")
//     }
// }
// let obj1 = new A()
// let obj2 = new A()

// class A{
//     constructor (name , age ,phone){
//         this.name = name;
//         this.age = age;
//         this.phone = phone;
//     }
// }
// let obj = new A("Ashim", 22, 9867456369)
// // console.log(obj)
// console.log(obj.name)
// console.log(obj.age)

// class Animal{
//     constructor(a,b,c){
//         this.color=a
//         this.legs=b
//         this.name=c
//     }
// }
// let cat = new Animal("brown",4,"tom")
// let dog = new Animal("black",4,"Lushy")
// let hen = new Animal("grey",2,"sky")
// console.log(cat)
// console.log(hen)
// console.log(dog)

class Animal {
    constructor(name,age,color,eat){
        this.name=name;
        this.age=age
        this.color=color
        this.eat = eat
    }
    eat (food){
        console.log(this.name ,"eats" ,food)
    }
    Walk(){
        console.log('Walk')

    }
    printinfo(){
        // console.log(`${this.name} eats ${this.eat } whose color is ${this.color} and age is ${this.age} .`)
        console.log(`${this.name} is ${this.age} years old and ${this.color} in colour and eats ${this.eat}`)
    }
    }
let cat = new Animal("tom",12,"black","milk")
let dog = new Animal("lushy",10,"grey","meat")
let cow = new Animal("tara",5,"Black","grass")
// cow.eat("grass")
// cat.eat("milk")
dog.printinfo()
cat.printinfo()
cow.printinfo()
let horse = new Animal("jerry",10,"White","hay")
horse.printinfo()


// let x=10

// console.log(` ${x}  it value is `)