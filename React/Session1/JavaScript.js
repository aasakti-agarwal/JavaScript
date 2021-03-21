//1. var,let,const

var name1 = "a"
console.log(name1)

name1 = "b"
console.log(name1)

let name2 = "a"
console.log(name2)

name2 = "b"
console.log(name2)

const name3 = "a"
console.log(name3)

name3 = "b"
console.log(name3)

//output

/*
"a"
"b"
"a"
"b"
"a"
"error"
"TypeError: Assignment to constant variable.
    at null.js:16:7
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:13924
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:10866"
*/

//2. Arrow Function
//solves the issue with 'this' keyword, scope remains intact

function printname(name){
  console.log(name);
}
printname("aasakti");

//output
"aasakti"

var printname2 = (name) => {
  console.log(name);
}
printname2("aasakti");

//output
"aasakti"

var multiply = (num) => num*2;

console.log(multiply(5));

//output
10

//for exactly 1 argument () can be removed.
//for functions just returning something for 1 or more args, {} can be removed along with 'return' keyword.

//3. Exports & Imports

const person = {
  name:'aasakti'
}
export default person

//export const val=10;
//export const func=()=>{}

//import personOrAnyName from './file.js'  , since person is default, only person gets imported but receiving func name can be anything

//import {val} from './file2.js'   or import {val as alias} from './file2.js'
//since val is not default , it's exact name is needed withing {}

//import * as aliaSobj from'./file3.js'   ,to import all the exported content at once
//aliaSobj.val, aliaSobj.func...to access  the imported content individually

//4. Classes



//classes are blueprints for objects, having variables as properties and functions as methods

class Person{
  name='aasakti'
  func=(name)=>{console.log(this.name)}
}

const obj=new Person()
obj.func('agarwal')

class Person2{
  name2='aasakti'
  func2=(name2)=>{console.log(name2)}
}

const obj2=new Person2()
obj2.func2('agarwal')

class Demo {
  constructor() {
    this.name='jenny'
  } 
  func3=()=> {
    console.log(this.name);
  }
}
//constructor function will execute as soon as class is instantiated
const obj3 = new Demo();
obj3.func3();

//inheritance
//'super' method must be declared in constructor of child class to successfully execute constructor of parent class 
class Demo2 extends Demo{
  constructor() {
    super();
    this.age=21
    this.name='max'
  }
  func4() {
    console.log(this.age);
    console.log(this.name);
  }
}

const obj4 = new Demo2;
obj4.func4();
obj4.func3();

//output

"aasakti"

"agarwal"

"jenny"

21

"max"

"max"

// 5. Class2

//ES7 introduces arrow function ... and removes constructor call...'this' not needed to initialize variables but, 'this' needed to access them

// 6. Spread & Rest

// spread operator...splits array elements and object properties

const arr = [1,2,3]
const arr3 = [arr,4,5]
const arr2 = [...arr,4,5]
console.log(arr2)
console.log(arr3)

const obj1 = {
  name: 'aasakti'
};

const obj2 = {
  ...obj1,
  age: 21
}

console.log(obj2)



// rest operator...merge func args to an arr

const func = (...arguments) => {
  console.log(arguments.sort())
}

func(4,1,9,5,3,2,23)

//sort() only working on single digit elements

//output

[1, 2, 3, 4, 5]
[[1, 2, 3], 4, 5]
[object Object] {
  age: 21,
  name: "aasakti"
}
[1, 2, 23, 3, 4, 5, 9]

// 7. Destructuring

//Destructuring extracts array elements or object properties and store them in variables

//works on individual elements rather than all unlike spread...

// 1. Array..order matters

[a,b] = ['mad','max'];
console.log(b);

const num = [1,2,3,4];
[a,b,,d] = num;
console.log(d);

// 2. Object..property name matters
{name}={name:'aasakti',age:21};
console.log(name);

//output

"max"
4

// 8. Reference & Primitive Types

//primitive types..boolean, strings, numbers
//reference types..objects, arrays

//object is stored in memory and in the object itself we store a pointer to that memory
//to prevent it we can use spread operator

let el1 = 101;
let el2 = el1;

el1 = 505;
console.log(el2);



const obj1 = {
  age: 101
};

const obj2 = obj1;

obj1.age = 505;

console.log(obj2);

//output

101

[object Object] {
  age: 505
}

// 9. Array Functions

const arr = [1,2,3]

//1.map

const arr2 = arr.map((item)=>{return item * 2});

console.log(arr2)
console.log(arr)

//output

[2, 4, 6]
[1, 2, 3]

 



































