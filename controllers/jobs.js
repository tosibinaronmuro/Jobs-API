const Jobs=require('../schema/jobs')
const {StatusCodes}=require('http-status-codes')


const getAllJobs = async (req, res, next) => {
  res.send("get jobs");
};
const getJob = async (req, res, next) => {
  res.send("get jobs");
};

const deleteAllJobs = async (req, res) => {
  res.send("delete jobs");
};
const updateJob = async (req, res) => {
  res.send("delete jobs");
};
const createJob = async (req, res) => {
  try {
    const jobs=await Jobs.create({...req.body})
  res.status(StatusCodes.CREATED).json({jobs})
  } catch (error) {
    console.log(error)
  }
};

module.exports = { getAllJobs, deleteAllJobs, updateJob, createJob, getJob };
