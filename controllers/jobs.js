const Jobs = require("../schema/jobs");
const { StatusCodes } = require("http-status-codes");
const { BadRequest, NotFound } = require("../error");


const getAllJobs = async (req, res, next) => {
  const jobs = await Jobs.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res
    .status(StatusCodes.OK)
    .json({ "total number of jobs": jobs.length, jobs });
};


const getJob = async (req, res, next) => {
  const { id: jobId } = req.params;

  const job = await Jobs.findOne({ _id: jobId, createdBy: req.user.userId });
  if (!job) {
    throw new NotFound(`No job with Id:${jobId}`);
  }

  res.status(StatusCodes.OK).json({ job });
};


const deleteAllJobs = async (req, res) => {
  const { id: jobId } = req.params;
  const { userId } = req.user;

  const job = await Jobs.findOneAndDelete({ _id: jobId, createdBy: userId });
  if (!job) {
    throw new NotFound(`No job with Id:${jobId}`);
  }
  res.status(StatusCodes.OK).send();
};


const updateJob = async (req, res) => {
  const {
    params: { id: jobId },
    body: { company, position },
    user: { userId },
  } = req;

  if (company == "" || position == "") {
    throw new BadRequest("fields cannot be empty!");
  }
  const updateJob = await Jobs.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    { company, position },
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ updateJob });
};


const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  try {
    const jobs = await Jobs.create({ ...req.body });
    res.status(StatusCodes.CREATED).json({ jobs });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllJobs, deleteAllJobs, updateJob, createJob, getJob };
