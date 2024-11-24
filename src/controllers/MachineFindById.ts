import express, { Request, Response, NextFunction, RequestHandler } from 'express'
import { findByMachineId, MachineModel } from '../models/MachineSchema'

export const machineFindById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        updateMachineParametersPeriodically(id)
        const machines = await findByMachineId(id)
        res.status(200).json(machines)
    } catch(error) {
        console.log('Error in deleting machine', error)
        next(error)
    }
}

export const updateMachineParametersPeriodically = async (itemID: string) => {
    try {
        const machine = await findByMachineName(itemID)

        if (!machine) {
            console.error(`Machine with id ${itemID} not found.`)
        }
        machine!.parm1 = randomIntFromInterval(50, 100)
        machine!.parm2 = randomIntFromInterval(0, 10)
        machine!.parm3 = randomIntFromInterval(10, 100)
        machine!.parm4 = randomIntFromInterval(30, 400)
        await machine!.save()
        console.log(`Updated machine ${itemID} with new values.`)
    } catch (error) {
        console.error(`Error updating machine ${itemID}:`, error)
    }
};
function randomIntFromInterval(min: number, max: number): string {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min)
    return randomInt.toString()
}
export const findByMachineName = async (machineName: string) => {
    try {
      const machine = await MachineModel.findOne({ machineName })
      return machine
    } catch (error) {
      console.error(`Error finding machine by name "${machineName}":`, error)
      throw error
  }
}