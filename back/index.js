const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
});

const userRoutes = require('./controllers/userController')
app.use("/api", userRoutes);

app.listen(4500, () => console.log(`listening on http://localhost:4500`));