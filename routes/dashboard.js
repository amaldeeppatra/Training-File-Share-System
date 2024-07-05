const {Router} = require("express");
const router = Router();

const { ensureAuthenticated } = require("../middlewares/authentication");
const { handleDashboard } = require("../controllers/dashboard");

router.get("/", ensureAuthenticated, handleDashboard);


module.exports = router;