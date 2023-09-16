import dayjs from "dayjs";
import Clock from "../models/clock.js";

const createClockIn = async (req, res, next) => {
  try {
    const { body: payload } = req;
    const newPayload = { ...payload, checkIn: new Date() };
    const clock = await new Clock(newPayload).save();
    return res.status(200).send(clock);
  } catch (error) {
    return next(error);
  }
};
const createClockOut = async (req, res, next) => {
  try {
    const { body: payload } = req;
    const { employeeId } = payload;

    const currentDate = dayjs(new Date()).format('YYYY-MM-DD');

    await Clock.findOne({
      employeeId,
      checkIn: {
        $gte: `${currentDate}T00:00:00.000Z`,
        $lt: `${currentDate}T23:59:59.999Z`
      }
    }).then((clock) => {
      if (!clock) {
        res.status(404).json({
          message: 'clock not found'
        })
      } else {
        clock.checkOut = new Date();
        clock.time = dayjs(new Date()).diff(new Date(clock.checkIn), 'hour', true);
        clock.save()
          .then(result => {
            res.status(200).json(result);
          })
          .catch(err => {
            res.status(300).json(err);
          })
      };
    })
      .catch(err => {
        res.status(300).json(err);
      })

  } catch (error) {
    return next(error);
  }
};


export { createClockIn, createClockOut }
