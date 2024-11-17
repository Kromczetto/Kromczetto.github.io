"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MachineFindById_1 = require("../controllers/MachineFindById");
exports.default = (router) => {
    router.get('/machine/:id', MachineFindById_1.machineFindById);
};
