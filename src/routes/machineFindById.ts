import express from 'express';
import { machineFindById } from '../controllers/MachineFindById';

export default (router: express.Router) => {
    router.get('/machine/:id', machineFindById)
}
