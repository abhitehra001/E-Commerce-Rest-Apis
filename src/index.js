const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./routes/Product");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://abhitehra001:abhitehra@todolist.aqoxzwj.mongodb.net/test")
.then( () => {
    console.log("Connected to Mongo DB Atlas");
})

app.use("/products", router);

app.listen(8000, () => {
    console.log("Server Started at port 8000");
})