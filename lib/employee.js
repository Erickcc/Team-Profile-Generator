// Employee class
class Employee {
    // Constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Returns the current obj name
    getName() {
        return this.name;
    }
    // Returns the current obj ID
    getID() {
        return this.id;
    }
    // Returns the current obj Email
    getEmail() {
        return this.email;
    }
    // Returns the current obj Role
    getRole() {
        return 'Employee';
    }
}
// Exports the class
module.exports = Employee;