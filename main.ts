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
myVariable();
myVariable.toUpperCase();

// unknown
let naem: unknown = 10;

function hasname(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasname(naem)) {
  console.log(naem.name);
}
(naem as string).toUpperCase();
