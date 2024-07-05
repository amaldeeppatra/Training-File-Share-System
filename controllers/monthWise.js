const Employee = require("../models/employee");
const ContractWorker = require("../models/contract_worker");

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function formatMonth(month) {
    const [year, monthIndex] = month.split('-');
    return `${monthNames[parseInt(monthIndex) - 1]} ${year}`;
}

async function handleMonthWiseView(req, res){
    const employeeAggregation = await Employee.aggregate([
        { $group: { _id: "$month", employeeCount: { $sum: 1 } } },
        { $sort: { _id: 1 } }
    ]);

    const contractorAggregation = await ContractWorker.aggregate([
        { $group: { _id: "$month", contractorCount: { $sum: 1 } } },
        { $sort: { _id: 1 } }
    ]);

    // Merge the results
    const combinedResults = {};

    employeeAggregation.forEach(item => {
        combinedResults[item._id] = {
            month: formatMonth(item._id),
            employeeCount: item.employeeCount,
            contractorCount: 0
        };
    });

    contractorAggregation.forEach(item => {
        if (combinedResults[item._id]) {
            combinedResults[item._id].contractorCount = item.contractorCount;
        } else {
            combinedResults[item._id] = {
                month: formatMonth(item._id),
                employeeCount: 0,
                contractorCount: item.contractorCount
            };
        }
    });

    const formattedData = Object.values(combinedResults);

    // res.render("viewmonthwise", {
    //     empData: count,
    // })

    res.render("viewmonthwise", { data: formattedData })
}

module.exports = { handleMonthWiseView };