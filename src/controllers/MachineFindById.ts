import express, {Request, Response, NextFunction, RequestHandler} from 'express'
import { findByMachineId } from '../models/MachineSchema'

export const machineFindById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const machines = await findByMachineId(id)
        res.status(200).json(machines)
    } catch(error) {
        console.log('Error in deleting machine', error)
        next(error)
    }
}