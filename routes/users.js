import express from "express";

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers); // get All data

router.post("/", createUser); // input new data

router.get("/:id", getUser); // get specific user by id

router.delete("/:id", deleteUser); // remove data user

router.patch("/:id", updateUser); // change data array from user

export default router;
