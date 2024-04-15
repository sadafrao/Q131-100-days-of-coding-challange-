"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
// Q131
// in file main.ts
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.print = function () {
        console.log("name: ".concat(this.name, ", age: ").concat(this.age));
    };
    return person;
}());
exports.person = person;
