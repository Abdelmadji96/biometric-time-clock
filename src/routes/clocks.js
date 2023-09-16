import express from 'express';

import { createNewClockValidator } from '../validations/clocks.js';
import { createClockIn, createClockOut } from '../controllers/clocks.js';

const router = express.Router();

router.route('/check-in')
  .post(createNewClockValidator, createClockIn)

router.route('/check-out')
  .post(createNewClockValidator, createClockOut)


export default router;
