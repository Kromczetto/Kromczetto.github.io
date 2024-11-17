import express from 'express'
import machineRoutes from './machineRoutes'

const router = express.Router()
export default (): express.Router => {
    machineRoutes(router)
    return router
}