const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const userRoute = require("./routes/user");
const dashboardRoute = require("./routes/dashboard");
const employeeRoute = require("./routes/employee");
const editRoute = require("./routes/edit");
const viewRoute = require("./routes/view");

const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const bodyParser = require("body-parser")

mongoose.connect(process.env.mongodbURL).then((e) => console.log("Mongodb connected"))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) => {
    return res.render("home");
})


app.use("/user", userRoute);
app.use("/dashboard", dashboardRoute);
app.use("/employee", employeeRoute);
app.use("/edit", editRoute);
app.use("/view", viewRoute);


app.listen(PORT, () => console.log(`Server running at port ${PORT}`));