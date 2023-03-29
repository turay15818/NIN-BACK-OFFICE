import express  from "express";
import {createAuditTrail,getAuditTrail, getAuditTrailById,getAuditPerDay } from "../controllers/AuditController.js"

import { verifyUser, adminOnly, userOnly } from "../middleware/AuthUser.js";

const router = express.Router()

router.post('/auditTrail', verifyUser, createAuditTrail)
router.get('/auditTrail', verifyUser, adminOnly, getAuditTrail)
router.get('/auditPerDay', verifyUser, adminOnly, getAuditPerDay)
router.get('auditTrail/:id', verifyUser, getAuditTrailById)

export default router