"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MachineUpdate_1 = require("../controllers/MachineUpdate");
exports.default = (router) => {
    router.patch('/update/machine/:id', MachineUpdate_1.updateMachine);
};
