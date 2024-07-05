const Employee = require("../models/employee");
const ContractWorker = require("../models/contract_worker");
const XLSX = require("xlsx")
const fs = require("fs");


async function handleEmployeeViewAll(req, res){
    const allData = await Employee.find({});
    return res.render("viewemp", {
        data: allData,
    })
}

async function handleContractWorkerViewAll(req, res){
    const allData = await ContractWorker.find({});
    return res.render("viewcontract", {
        data: allData,
    })
}

module.exports = {
    handleEmployeeViewAll,
    handleContractWorkerViewAll,
    
}