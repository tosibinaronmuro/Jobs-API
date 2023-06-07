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
  res.send("delete jobs");
};

module.exports = { getAllJobs, deleteAllJobs, updateJob, createJob, getJob };
