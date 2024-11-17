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
exports.getAllMachines = void 0;
const MachineSchema_1 = require("../models/MachineSchema");
const getAllMachines = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const machines = yield (0, MachineSchema_1.getMachines)();
        if (machines.length === 0) {
            res.status(404).json({ error: 'Not machine found' });
            return;
        }
        res.status(200).json(machines);
    }
    catch (error) {
        console.log('Error in getting machine params', error);
        next(error);
    }
});
exports.getAllMachines = getAllMachines;
