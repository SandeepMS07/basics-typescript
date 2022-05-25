"use strict";
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
/**
 * variable declarations
 */
var x = 10;
var y = 20;
var sum;
var title = "codesd";
/**
 * variable types
 */
var isBeginner = true;
var total = 0;
var name = "Sandeep";
var sentence = "My name is ".concat(name, " \n    I am a beginner in Typescript");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["chris", 22];
// let person1: [string, number] = [ 22, "chris"]; //this is error
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 6] = "green";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
var c = Color.green;
console.log(c);
// any
var randomValue = 10;
randomValue = true;
randomValue = "Sandy";
var myVariable = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
// unknown
var naem = 10;
function hasname(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasname(naem)) {
    console.log(naem.name);
}
naem.toUpperCase();
