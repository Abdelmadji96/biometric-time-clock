import { model, Schema } from 'mongoose';

const employeeSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },

});

const Employee = model('Employee', employeeSchema);
export default Employee;
