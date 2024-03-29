const express = require("express");
const userRouter = require("./router/userRoute");
const adminRouter = require("./router/adminRoute");

const app = express();

const port = process.env.PORT || 3000;


app.use(express.json());


app.use(userRouter);
app.use(adminRouter);

// START SERVER
app.listen(port, () => {});
