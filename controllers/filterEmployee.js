const Employee = require("../models/employee");
const ContractWorker = require("../models/contract_worker");

async function handleEmpIDFilter(req, res){
    let empid = req.body.empID;
    const allData = await Employee.find({empID:empid});
    return res.render("viewemp", {
        data: allData,
    })
}

async function handleEmpDeptFilter(req, res){
    let dept = req.body.dropdown1;
    const allData = await Employee.find({dept:dept});
    return res.render("viewemp", {
        data: allData,
    })
}

async function handleEmpTopicFilter(req, res){
    let topic = req.body.dropdown2;
    const allData = await Employee.find({topic:topic});
    return res.render("viewemp", {
        data: allData,
    })
}

async function handleEmpMonthFilter(req, res){
    let month = req.body.month;
    const allData = await Employee.find({month:month});
    return res.render("viewemp", {
        data: allData,
    })
}

module.exports = {
    handleEmpIDFilter,
    handleEmpDeptFilter,
    handleEmpTopicFilter,
    handleEmpMonthFilter
}