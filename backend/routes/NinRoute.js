import  express  from "express";
import {
     getNin,
     ninCreate,
     getNinById,
     updateNin, 
     getDataByRejected,
     getDataByConfirmed,
     ninSearch,
     ninSearchh,
     getRecountConfirm,
     getCountOneHour,
     getCounttOneHour,
     getRecountReject,
     getRecountPending
     } from "../controllers/NinController.js";

import { verifyUser,userOnly,adminOnly } from "../middleware/AuthUser.js";

const router = express.Router()

router.get('/nin', verifyUser, getNin)
router.get('/recountConfirm', verifyUser, getRecountConfirm)
router.get('/recountReject', verifyUser, getRecountReject)
router.get('/recountPending', verifyUser, getRecountPending)
router.get('/countOneHour', verifyUser, getCountOneHour)
router.get('/counttOneHour', verifyUser, getCounttOneHour)
router.post('/ninSearch', verifyUser, ninSearch)
router.post('/ninSearchh', verifyUser, ninSearchh)
router.get('/dataByConfirmed', verifyUser, getDataByConfirmed)
router.get('/dataByRejected', verifyUser, getDataByRejected)
router.post('/nin', verifyUser, ninCreate)
router.get('/nin/:id', verifyUser, getNinById)
router.patch('/nin/:id', verifyUser, updateNin)


export default router