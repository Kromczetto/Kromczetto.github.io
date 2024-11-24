import mongoose from 'mongoose';

const MachineSchema = new mongoose.Schema({
    machineName: { type: String, required: true },
    parm1: { type: String, required: true },
    parm2: { type: String, required: false },
    parm3: { type: String, required: false },
    parm4: { type: String, required: false },
});

export const MachineModel = mongoose.model('Machine', MachineSchema);

export const getMachines = () => MachineModel.find();
export const findByMachineId = (id: string) => MachineModel.findById({ _id: id })
export const createMachine = (values: Record<string, any>) =>
    new MachineModel(values).save().then((machine) => machine.toObject());
export const deleteMachineById = (id: string) => MachineModel.findOneAndDelete({ _id: id });
export const updateMachineById = (id: string, values: Record<string, any>) =>
    MachineModel.findByIdAndUpdate(id, values,);