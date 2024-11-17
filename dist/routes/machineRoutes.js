"use strict";
// import { Router, Request, Response } from 'express'
Object.defineProperty(exports, "__esModule", { value: true });
const MachineAdder_1 = require("../controllers/MachineAdder");
exports.default = (router) => {
    router.post('/add', MachineAdder_1.adder);
};
