"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMachineParametersPeriodically = exports.machineFindById = void 0;
const MachineSchema_1 = require("../models/MachineSchema");
const machineFindById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        (0, exports.updateMachineParametersPeriodically)(id);
        const machines = yield (0, MachineSchema_1.findByMachineId)(id);
        res.status(200).json(machines);
    }
    catch (error) {
        console.log('Error in deleting machine', error);
        next(error);
    }
});
exports.machineFindById = machineFindById;
const updateMachineParametersPeriodically = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const machine = yield (0, MachineSchema_1.findByMachineId)(id);
        if (!machine) {
            console.error(`Machine with id ${id} not found.`);
        }
        machine.parm1 = randomIntFromInterval(50, 100);
        machine.parm2 = randomIntFromInterval(0, 10);
        machine.parm3 = randomIntFromInterval(10, 100);
        machine.parm4 = randomIntFromInterval(30, 400);
        yield machine.save();
        console.log(`Updated machine ${id} with new values.`);
    }
    catch (error) {
        console.error(`Error updating machine ${id}:`, error);
    }
});
exports.updateMachineParametersPeriodically = updateMachineParametersPeriodically;
function randomIntFromInterval(min, max) {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    return randomInt.toString();
}
