import express from 'express'
import machineRoutes from './machineRoutes'
import machineGetRouters from './machineGetRouters'

const router = express.Router()
export default (): express.Router => {
    machineRoutes(router)
    machineGetRouters(router)
    return router
}