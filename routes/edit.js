const {Router} = require("express");
const { ensureAuthenticated } = require("../middlewares/authentication");
const { handleEditEmployee, handleEditContractWorker } = require("../controllers/edit");
const router = Router();

router.get("/", ensureAuthenticated, (req, res) => {
    return res.render("edit")
})

router.get("/employee", ensureAuthenticated, (req, res) => {
    return res.render("employee", {message: ''})
})

router.get("/contract-worker", ensureAuthenticated, (req, res) => {
    return res.render("contractworker", {message: ''})
})

router.post("/employee", ensureAuthenticated, handleEditEmployee);

router.post("/contract-worker", ensureAuthenticated, handleEditContractWorker);

module.exports = router;