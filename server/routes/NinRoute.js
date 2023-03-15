import  express  from "express";
import {
     getNin,
     ninCreate,
     getNinById,
     updateNin, 
     getDataByRejected,
     getDataByConfirmed,
     } from "../controllers/NinController.js";

import { verifyUser,userOnly,adminOnly } from "../middleware/AuthUser.js";

const router = express.Router()

router.get('/nin', verifyUser, getNin)
router.get('/dataByConfirmed', verifyUser, getDataByConfirmed)
router.get('/dataByRejected', verifyUser, getDataByRejected)
router.post('/nin', verifyUser, ninCreate)
router.get('/nin/:id', verifyUser, getNinById)
router.patch('/nin/:id', verifyUser, userOnly, updateNin)


export default router