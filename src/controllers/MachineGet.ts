import express, {Request, Response, NextFunction, RequestHandler} from 'express'
import { getMachines } from '../models/MachineSchema'

export const getAllMachines: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const machines = await getMachines()

        if(machines.length === 0) {
            res.status(404).json({error: 'Not machine found'})
            return
        }
        res.status(200).json(machines)
    } catch(error) {
        console.log('Error in getting machine params', error)
        next(error)
    }
}