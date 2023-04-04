import express from "express";
const router = express.Router();

import {
  createJob,
  deleteJobs,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobController.js";

router.route("/").post(createJob).get(getAllJobs);
// remember about :id

router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJobs).patch(updateJob);
export default router;
