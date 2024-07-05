const {Router, json} = require("express");
const Employee = require("../models/employee");
const ContractWorker = require("../models/contract_worker");
const XLSX = require("xlsx")
const fs = require("fs");
const { ensureAuthenticated } = require("../middlewares/authentication");
const { handleEmployeeViewAll, handleContractWorkerViewAll } = require("../controllers/view");
const { handleEmployeeDownload, handleContractWorkerDownload } = require("../controllers/download");
const { handleEmpIDFilter, handleEmpDeptFilter, handleEmpTopicFilter, handleEmpMonthFilter } = require("../controllers/filterEmployee");
const { handleContWorkerIDFilter, handleContWorkerDeptFilter, handleContWorkerTopicFilter, handleContWorkerMonthFilter } = require("../controllers/filterContractWorker");
const { handleMonthWiseView } = require("../controllers/monthWise");
const router = Router();


router.get("/", ensureAuthenticated, (req, res) => {
    res.render("view")
})


// View all data
router.get("/employee", ensureAuthenticated, handleEmployeeViewAll);

router.get("/contract-worker", ensureAuthenticated, handleContractWorkerViewAll);


// Download the excel file
router.get("/employee/download", ensureAuthenticated, handleEmployeeDownload);

router.get("/contract-worker/download", ensureAuthenticated, handleContractWorkerDownload);


// Filters for Employee
router.post("/employee/filter-empid", ensureAuthenticated, handleEmpIDFilter);

router.post("/employee/filter-dept", ensureAuthenticated, handleEmpDeptFilter);

router.post("/employee/filter-topic", ensureAuthenticated, handleEmpTopicFilter);

router.post("/employee/filter-month", ensureAuthenticated, handleEmpMonthFilter);


// Filters for contract worker 
router.post("/contract-worker/filter-empid", ensureAuthenticated, handleContWorkerIDFilter);

router.post("/contract-worker/filter-dept", ensureAuthenticated, handleContWorkerDeptFilter);

router.post("/contract-worker/filter-topic", ensureAuthenticated, handleContWorkerTopicFilter);

router.post("/contract-worker/filter-month", ensureAuthenticated, handleContWorkerMonthFilter);


// Month-Wise View
router.post("/employee/monthwise", ensureAuthenticated, handleMonthWiseView);


module.exports = router;