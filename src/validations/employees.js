import { validateRequestBody } from 'zod-express-middleware';
import { date, object, string } from './schema.js';

const createNewEmployeeSchema = object({
  id: string,
  lastName: string,
  firstName: string,
  dateCreated: string,
  department: string,
});

export const createNewEmployeeValidator = validateRequestBody(createNewEmployeeSchema);
