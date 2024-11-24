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
exports.adder = void 0;
const MachineSchema_1 = require("../models/MachineSchema");
const adder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { machineName, itemID, parm1, parm2, parm3, parm4 } = req.body;
        if (!machineName || !itemID || !parm1 || !parm2 || !parm3 || !parm4) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }
        const machine = yield (0, MachineSchema_1.createMachine)({
            machineName,
            itemID,
            parm1,
            parm2,
            parm3,
            parm4,
        });
        res.status(201).json(machine);
    }
    catch (error) {
        console.error('Error in adder:', error);
        next(error);
    }
});
exports.adder = adder;
