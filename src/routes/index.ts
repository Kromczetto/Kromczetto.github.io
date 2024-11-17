import express from 'express'
import machineRoutes from './machineRoutes'
import machineGetRouters from './machineGetRouters'
import machineDeleteRouters from './machineDeleteRouters'
import machineFindById from './machineFindById'
import machineUpdateRoutes from './machineUpdateRoutes'

const router = express.Router()
export default (): express.Router => {
    machineRoutes(router)
    machineGetRouters(router)
    machineDeleteRouters(router)
    machineFindById(router)
    machineUpdateRoutes(router)
    return router
}