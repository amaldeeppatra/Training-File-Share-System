const Employee = require("../models/employee");
const ContractWorker = require("../models/contract_worker");

async function handleContWorkerIDFilter(req, res){
    let empid = req.body.empID;
    const allData = await ContractWorker.find({empID:empid});
    return res.render("viewcontract", {
        data: allData,
    })
}

async function handleContWorkerDeptFilter(req, res){
    let dept = req.body.dropdown1;
    const allData = await ContractWorker.find({dept:dept});
    return res.render("viewcontract", {
        data: allData,
    })
}

async function handleContWorkerTopicFilter(req, res){
    let topic = req.body.dropdown2;
    const allData = await ContractWorker.find({topic:topic});
    return res.render("viewcontract", {
        data: allData,
    })
}

async function handleContWorkerMonthFilter(req, res){
    let month = req.body.month;
    const allData = await ContractWorker.find({month:month});
    return res.render("viewcontract", {
        data: allData,
    })
}

module.exports = {
    handleContWorkerIDFilter,
    handleContWorkerDeptFilter,
    handleContWorkerTopicFilter,
    handleContWorkerMonthFilter
}