import express from "express";
import { getAllMachines } from '../controllers/MachineGet'; 

export default (router: express.Router) => {
    router.get('/machines', getAllMachines)
}