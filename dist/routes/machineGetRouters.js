"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MachineGet_1 = require("../controllers/MachineGet");
exports.default = (router) => {
    router.get('/machines', MachineGet_1.getAllMachines);
};
