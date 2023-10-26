const express = require("express");
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const connectDB = require("./middlewares/connectDB");

const app = express();

connectDB();
app.use(express.json());
app.use('/auth', userRoutes);
app.use((req,res) => {
    res.send("hello world! nabil");
})

app.listen(5000, () => { console.log("server is running on port 5000")});