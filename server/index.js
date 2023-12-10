import express from "express";
import dotenv from "dotenv";

import Connection from "./database/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
