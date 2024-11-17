import express from 'express';
import { deleteMachine } from '../controllers/MachineDelete';

export default (router: express.Router) => {
    router.delete('/delete/:id', deleteMachine)
}
