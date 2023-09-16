import express from 'express';

import employeesRouter from './employees.js'
import clocksRouter from './clocks.js'

const router = express.Router();

router.use('/employees', employeesRouter)
router.use('/clocks', clocksRouter)

export default router;
