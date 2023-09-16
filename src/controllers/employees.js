import Employee from "../models/employee.js";

const createOne = async (req, res, next) => {
  try {
    const { body: payload } = req;
    const user = await new Employee(payload).save();
    return res.status(200).send(user);
  } catch (error) {
    return next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    return res.status(200).send(employees);
  } catch (error) {
    return next(error);
  }
};

const getEmployeeByDate = async (req, res, next) => {
  try {
    const { params: { date } } = req;
    const employees = await Employee.find({
      dateCreated: {
        $gte: `${date}T00:00:00.000Z`,
        $lt: `${date}T23:59:59.999Z`
      }
    });
    return res.status(200).send(employees);
  } catch (error) {
    return next(error);
  }
};

export { createOne, getAll, getEmployeeByDate }
