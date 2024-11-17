import express, {Request, Response, NextFunction, RequestHandler} from 'express'
import { deleteMachineById } from '../models/MachineSchema'

export const deleteMachine: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const machines = await deleteMachineById(id)
        res.status(200).json(machines)
    } catch(error) {
        console.log('Error in deleting machine', error)
        next(error)
    }
}