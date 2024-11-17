"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MachineDelete_1 = require("../controllers/MachineDelete");
exports.default = (router) => {
    router.delete('/delete/:id', MachineDelete_1.deleteMachine);
};
