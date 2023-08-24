import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js"; // doing import from routes/users.js

// const express = require("express");
const app = express();

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send(`Homepage`));

app.get("/about", (req, res) => res.send(`about`));

app.get("/contact", (req, res) => res.send(`contact`));

app.listen(5000, () => console.info("local server is running on 5000..."));
