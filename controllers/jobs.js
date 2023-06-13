const Jobs = require("../schema/jobs");
const { StatusCodes } = require("http-status-codes");
const { BadRequest } = require("../error");

const getAllJobs = async (req, res, next) => {
  const jobs = await Jobs.find({});
  res.status(StatusCodes.OK).json({ "total number of jobs": jobs.length, jobs });
  next();
};
const getJob = async (req, res, next) => {
  const { id: jobId } = req.params;

  const job = await Jobs.findOne({ _id: jobId });
  if (!job) {
    throw new BadRequest("invalid id");
  }

  res.status(StatusCodes.OK).json({ job });
  next();
};

const deleteAllJobs = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Jobs.findOneAndDelete({ _id: jobId });
  res.status(StatusCodes.OK).json({ job });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const updateJob = await Jobs.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ updateJob });
};

const createJob = async (req, res) => {
  try {
    const jobs = await Jobs.create({ ...req.body });
    res.status(StatusCodes.CREATED).json({ jobs });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllJobs, deleteAllJobs, updateJob, createJob, getJob };
