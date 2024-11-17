import express from 'express';
import { updateMachine} from '../controllers/MachineUpdate';

export default (router: express.Router) => {
    router.patch('/update/machine/:id', updateMachine)
}
