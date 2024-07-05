const Employee = require("../models/employee");
const ContractWorker = require("../models/contract_worker");
const XLSX = require("xlsx")
const fs = require("fs");

async function handleEmployeeDownload(req, res){
    const allData = await Employee.find({}, { _id: 0, __v: 0 });
    const formattedData = allData.map(item => ({
        'Emp. ID': item.empID,
        'Name': item.name,
        'Department': item.dept,
        'Topic of Training Programme': item.topic,
        'Date': item.date,
        'Duration (in hrs)': item.duration,
        'Executive/Non Executive': item.executive,
    }));

    const jsonData = JSON.stringify(formattedData);
    const parsedData = JSON.parse(jsonData);
    const ws = XLSX.utils.json_to_sheet(parsedData);

    // Set the column widths
    ws['!cols'] = [
        { wpx: 100 },  // width for 'Emp. ID'
        { wpx: 150 },  // width for 'Name'
        { wpx: 150 },  // width for 'Department'
        { wpx: 200 },  // width for 'Topic of Training Programme'
        { wpx: 100 },  // width for 'Date'
        { wpx: 120 },  // width for 'Duration (in hrs)'
        { wpx: 150 },  // width for 'Executive/Non Executive'
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Employee");
    const excelBuffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    fs.writeFileSync('empData.xlsx', excelBuffer);

    console.log("Created json successfully");
    res.set('Content-Disposition', 'attachment; filename="empData.xlsx"');
    res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(excelBuffer);
    console.log("File sent");
}

async function handleContractWorkerDownload(req, res){
    const allData = await ContractWorker.find({}, { _id: 0, __v: 0 });
    const formattedData = allData.map(item => ({
        'Emp. ID': item.empID,
        'Name': item.name,
        'Department': item.dept,
        'Topic of Training Programme': item.topic,
        'Date': item.date,
        'Duration (in hrs)': item.duration,
        'Name of Contractor': item.nameOfContractor,
    }));

    const jsonData = JSON.stringify(formattedData);
    const parsedData = JSON.parse(jsonData);
    const ws = XLSX.utils.json_to_sheet(parsedData);

    // Set the column widths
    ws['!cols'] = [
        { wpx: 100 },  // width for 'Emp. ID'
        { wpx: 150 },  // width for 'Name'
        { wpx: 150 },  // width for 'Department'
        { wpx: 200 },  // width for 'Topic of Training Programme'
        { wpx: 100 },  // width for 'Date'
        { wpx: 120 },  // width for 'Duration (in hrs)'
        { wpx: 150 },  // width for 'Name of Contractor'
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Contract-Worker");
    const excelBuffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    fs.writeFileSync('contractWorkerData.xlsx', excelBuffer);

    console.log("Created json successfully");
    res.set('Content-Disposition', 'attachment; filename="contractWorkerData.xlsx"');
    res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(excelBuffer);
    console.log("File sent");
}

module.exports = {
    handleEmployeeDownload,
    handleContractWorkerDownload
}