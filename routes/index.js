import express from "express";
import chatRoute from "./chat.route.js";

const router = express.Router();

router.use("/", chatRoute);

export default router;