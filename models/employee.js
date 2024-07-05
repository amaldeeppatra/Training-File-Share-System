const {Schema, model} = require("mongoose");

const employeeSchema = new Schema({
    empID: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    executive: {
        type: String,
        required: true,
    },

})
  

const Employee = model("employee", employeeSchema);

module.exports = Employee;