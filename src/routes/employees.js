import express from 'express';

import { createNewEmployeeValidator } from '../validations/employees.js';
import { createOne, getAll, getEmployeeByDate } from '../controllers/employees.js';

const router = express.Router();

router.route('/')
  .post(createNewEmployeeValidator, createOne)
  .get(getAll);

router.route('/:date')
  .get(getEmployeeByDate);

export default router;
