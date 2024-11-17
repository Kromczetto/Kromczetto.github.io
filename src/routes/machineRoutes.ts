// import { Router, Request, Response } from 'express'

// const router = Router()

// interface Machine {
//     id: number,
//     name: string,
//     owner: string,
//     parm1: string,
//     parm2: string,
//     parm3: string,
//     parm4: string
// }
// const machines: Machine[] = [
//     { id: 0, name: "skosiarka", owner: "Jakub", parm1: "jedens", parm2: "dwa", parm3: "trzy", parm4: "cztery" },
//     { id: 1, name: "krajarka", owner: "Maciek", parm1: "uno", parm2: "dos", parm3: "tres", parm4: "quatro" }
// ]

// // // Funkcja losująca wartości parametrów
// const getRandomValue = () => {
//     const randomValue = (Math.floor(Math.random() * 150)+50) + ''
//     return randomValue
// }

// // Funkcja, która będzie zmieniać wartości w tablicy co 5 sekund
// const updateMachineValues = () => {
//     setInterval(() => {
//         machines.forEach(machine => {
//             machine.parm1 = getRandomValue();
//             machine.parm2 = getRandomValue();
//             machine.parm3 = getRandomValue();
//             machine.parm4 = getRandomValue();
//         });
//     }, 5000); 
// }

// updateMachineValues();

// router.get('/machines', (req: Request, res: Response) => {
//     res.json(machines)
// })
// export default router
import express from 'express';
import { adder } from '../controllers/MachineAdder'


export default (router: express.Router) => {
    router.post('/add', adder)
}
