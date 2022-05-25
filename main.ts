export {};
let message = "Welcome back";
console.log(message);

/**
 * variable declarations
 */
let x = 10;
const y = 20;

let sum;
const title = "codesd";

/**
 * variable types
 */
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Sandeep";
let sentence: string = `My name is ${name} 
    I am a beginner in Typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["chris", 22];
// let person1: [string, number] = [ 22, "chris"]; //this is error

enum Color {
  red = 5,
  green,
  blue,
}
let c: Color = Color.green;
console.log(c);

// any
let randomValue: any = 10;
randomValue = true;
randomValue = "Sandy";

let myVariable: any = 10;
console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

// unknown
let naem: unknown = 10;

function hasname(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasname(naem)) {
  console.log(naem.name);
}
// (naem as string).toUpperCase();

//multitype
let a;
a = 10;
a = true;

let b = 20;

let multitype: number | boolean;
multitype = 20;
multitype = true;

let anyType: any;
anyType: 20;

/**
 * functions
 *
 */
function add(num1: number, num2: number) {
  console.log(num1 + num2);

  return num1 + num2;
}
add(5, 10);

// optional parameter => (?) symbol for optional
function add1(num1: number, num2?: number): number {
  if (num2) {
    console.log(num1 + num2);
  } else {
    console.log(num1);
  }
  return num1 + num2;
}
add1(5);

// default paramaeter
function add2(num1: number, num2: number = 10): number {
  if (num2) {
    console.log(num1 + num2);
  } else {
    console.log(num1);
  }
  return num1 + num2;
}
add2(10, 5);
add2(1);

/**
 * interface in typescript
 */

//example
function fullname(person: { firstname: string; lastname: string }) {
  console.log(`${person.firstname} ${person.lastname}`);
}
let p = {
  firstname: "Sandeep",
  lastname: "M S",
};
fullname(p);

//interface
interface person1 {
  firstname: string;
  lastname: string;
}
function fullname1(person: person1) {
  console.log(`${person.firstname} ${person.lastname}`);
}
let p2 = {
  firstname: "Sandeep",
  lastname: "M S",
};
fullname1(p2);

// optional
interface person2 {
  firstname: string;
  lastname?: string;
}
function fullname2(person: person2) {
  console.log(`${person.firstname} ${person.lastname}`);
}
let p1 = {
  firstname: "Sandeep",
};
fullname2(p1);

/**
 *
 * class
 */

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Sandeep");
console.log(emp1.employeeName);
emp1.greet();

//
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
console.log(emp1.employeeName);
