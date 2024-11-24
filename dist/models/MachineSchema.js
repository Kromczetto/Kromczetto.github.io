"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMachineById = exports.deleteMachineById = exports.createMachine = exports.findByMachineId = exports.getMachines = exports.MachineModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MachineSchema = new mongoose_1.default.Schema({
    machineName: { type: String, required: true },
    parm1: { type: String, required: true },
    parm2: { type: String, required: false },
    parm3: { type: String, required: false },
    parm4: { type: String, required: false },
});
exports.MachineModel = mongoose_1.default.model('Machine', MachineSchema);
const getMachines = () => exports.MachineModel.find();
exports.getMachines = getMachines;
const findByMachineId = (id) => exports.MachineModel.findById({ _id: id });
exports.findByMachineId = findByMachineId;
const createMachine = (values) => new exports.MachineModel(values).save().then((machine) => machine.toObject());
exports.createMachine = createMachine;
const deleteMachineById = (id) => exports.MachineModel.findOneAndDelete({ _id: id });
exports.deleteMachineById = deleteMachineById;
const updateMachineById = (id, values) => exports.MachineModel.findByIdAndUpdate(id, values);
exports.updateMachineById = updateMachineById;
