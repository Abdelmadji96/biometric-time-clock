import { validateRequestBody } from 'zod-express-middleware';
import { object, string } from './schema.js';

const createNewClockSchema = object({
  employeeId: string,
  comment: string.optional(),
});

export const createNewClockValidator = validateRequestBody(createNewClockSchema);
