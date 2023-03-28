"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Professional_1 = require("./Professional");
var profesional1 = new Professional_1.Professional("Thomas Eade", 27, 91, 184, false, "Español", 10, "Actor");
var profesional2 = new Professional_1.Professional("Pepe", 40, 80, 170, true, "Chino", 0, "Actor");
var profesional3 = new Professional_1.Professional("Rodrigo", 75, 75, 180, true, "Español", 2, "Actor");
profesional1.atributos();
profesional2.atributos();
profesional3.atributos();
