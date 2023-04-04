const createJob = async (req, res) => {
  res.send("Create Job");
};

const getAllJobs = async (req, res) => {
  res.send("Get All Jobs");
};

const showStats = async (req, res) => {
  res.send("Show Stats");
};

const updateJob = async (req, res) => {
  res.send("Update Jobs");
};
const deleteJobs = (req, res) => {
  res.send("Delete Jobs");
};

export { createJob, deleteJobs, getAllJobs, updateJob, showStats };
