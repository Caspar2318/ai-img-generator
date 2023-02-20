import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoute from "./routes/postRoute.js";
import dalleRoute from "./routes/dalleRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/dalle", dalleRoute);
app.use("/api/post", postRoute);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from DALL.E",
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on the port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
