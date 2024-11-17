import express from 'express';
import { adder } from '../controllers/MachineAdder'

export default (router: express.Router) => {
    router.post('/add', adder)
}
