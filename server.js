import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import morgan from "morgan";
// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware imports
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);
// middleware use
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // First making connection with DB
    await connectDB(process.env.MONGO_URL);
    // THEN STARTING A SERVER
    app.listen(port, () => {
      console.log(`Server is working on port http://localhost:${port}/`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
