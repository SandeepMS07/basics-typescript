"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// myVariable();
// myVariable.toUpperCase();
// unknown
var naem = 10;
function hasname(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasname(naem)) {
    console.log(naem.name);
}
// (naem as string).toUpperCase();
//multitype
var a;
a = 10;
a = true;
var b = 20;
var multitype;
multitype = 20;
multitype = true;
var anyType;
anyType: 20;
/**
 * functions
 *
 */
function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}
add(5, 10);
// optional parameter => (?) symbol for optional
function add1(num1, num2) {
    if (num2) {
        console.log(num1 + num2);
    }
    else {
        console.log(num1);
    }
    return num1 + num2;
}
add1(5);
// default paramaeter
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        console.log(num1 + num2);
    }
    else {
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
function fullname(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: "Sandeep",
    lastname: "M S"
};
fullname(p);
function fullname1(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p2 = {
    firstname: "Sandeep",
    lastname: "M S"
};
fullname1(p2);
function fullname2(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p1 = {
    firstname: "Sandeep"
};
fullname2(p1);
/**
 *
 * class
 */
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Sandeep");
console.log(emp1.employeeName);
emp1.greet();
//
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
console.log(emp1.employeeName);
