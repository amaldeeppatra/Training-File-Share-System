const User = require("../models/user");

async function handleDashboard(req, res){
    const name = await User.findById(req.user._id);
    return res.render("dashboard", {
        user: name.fullName,
    })
}

module.exports = { handleDashboard };