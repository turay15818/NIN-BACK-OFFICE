import  express  from "express";
import { getNin, ninCreate } from "../controllers/NinController.js";

import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router()

router.get('/nin', verifyUser, getNin)
router.post('/nin', verifyUser, ninCreate)


export default router