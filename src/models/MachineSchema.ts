import mongoose from 'mongoose'

export const MachineSchema = new mongoose.Schema({
    machineName: { type: String, required: true },
    owner: { type: String, required: true },
    parm1: { type: String, required: true },
    parm2: { type: String, required: false },
    parm3: { type: String, required: false },
    parm4: { type: String, required: false }
})

export const MachineModel = mongoose.model('Machine', MachineSchema)