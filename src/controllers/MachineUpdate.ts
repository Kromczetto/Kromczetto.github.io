import express, {Request, Response, NextFunction, RequestHandler} from 'express'
import { findByMachineId } from '../models/MachineSchema'

export const updateMachine: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { machineName, parm1, parm2, parm3, parm4 } = req.body
     
        if(!machineName || !parm1 || !parm2 || !parm3 || !parm4) {
            res.status(400).json({ error: 'Missing required fields' })
            return
        }
        const machine = await findByMachineId(id)
        machine!.machineName = machineName
        machine!.parm1 = parm1
        machine!.parm2 = parm2
        machine!.parm3 = parm3
        machine!.parm4 = parm4
        
        await machine!.save()
        res.status(200).json(machine)
    } catch(error) {
        console.log('Error in deleting machine', error)
        next(error)
    }
}