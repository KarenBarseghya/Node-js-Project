const express = require("express");
const router = express.Router();

const userRouter = require("../routers/userRouter")

router.use('/users', userRouter);


module.exports = router;

