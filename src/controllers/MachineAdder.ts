import express from 'express'

export const adder = async (req: express.Request, res: express.Response) => {
    try {
        const { machineName, owner, parm1, parm2, parm3, parm4} = req.body
        if(!machineName || !owner || !parm1 || !parm2 || !parm3 || parm4) {
            return res.sendStatus(400)
        }
        
    } catch(error) {
        console.log(error)
        return res.sendStatus(400)
    }
}