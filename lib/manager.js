// Imports the Employee class
const Employee = require ("./employee");

// Manager class, extends to Employee
class Manager extends Employee{
    // Constructor
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Returns the current obj office number
    getOfficeNumber(){
        return this.officeNumber;
    }
    // Returns the current obj role
    getRole(){
        return "Manager";
    }
}
// Exports the Manager class
module.exports = Manager;