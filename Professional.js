"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.atributos = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.weight);
        console.log(this.height);
        console.log(this.isRetired);
        console.log(this.nationality);
        console.log(this.oscarsNumber);
        console.log(this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
