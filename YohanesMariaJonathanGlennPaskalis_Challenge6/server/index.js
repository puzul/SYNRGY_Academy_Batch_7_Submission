const express = require("express");
const UserRoute = require ("./routes/UserRoute.js");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log('Server running'));


