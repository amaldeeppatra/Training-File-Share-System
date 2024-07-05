const Employee = require("../models/employee");
const ContractWorker = require("../models/contract_worker");


async function handleEditEmployee(req, res){
    try {
        const { empID, name, dept, topic, date, month, duration, executive } = req.body;
        console.log(req.body);
    
        if (!empID || !name) {
          throw new Error('Missing empID or name');
        }
    
        const employees = empID.map((id, index) => ({
          empID: id,
          name: name[index],
          dept,
          topic,
          date,
          month,
          duration,
          executive,
        }));
    
        await Employee.insertMany(employees);
    
        return res.redirect('/edit/employee');
      } catch (error) {
        console.error(error);
        return res.render('employee', {
          error: 'Invalid Details!',
        });
      }
}


async function handleEditContractWorker(req, res){
    try{
        const {empID, name, dept, topic, date, month, duration, nameOfContractor} = req.body;
        console.log(req.body);
        await ContractWorker.create({
            empID,
            name,
            dept,
            topic,
            date,
            month,
            duration,
            nameOfContractor,
        });
        return res.redirect("/edit/contract-worker")
    }
    catch (error){
        return res.render("contractworker", {
            error: "Invalid Details!"
        })
    }
}

module.exports = { handleEditEmployee, handleEditContractWorker };