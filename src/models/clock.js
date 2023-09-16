import { model, Schema } from 'mongoose';

const clockSchema = new Schema({
  employeeId: {
    type: String,
    required: true,
  },
  checkIn: {
    type: Date,
  },
  checkOut: {
    type: Date,
  },
  comment: {
    type: String,
  },
  time: {
    type: Number,
  }
});

const Clock = model('Clock', clockSchema);
export default Clock;
