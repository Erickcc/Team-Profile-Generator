const Employee = require("../lib/employee");
// We are going to test for the Employee class
describe("Employee", () => {
  // We are going to test for the getName() method inside the Employee class
  describe("getName", () => {
    it("Must return a string with the object name", () => {
      // We define our control variable, in this case a name, as Mike
      const objectName = 'Mike';
      // We create an object with a class of Employeee and we call the getName() method
      const employee = new Employee('Mike', '123', 'email@email.com').getName();
      // We expect our control variable and our object's value to be the same
      expect(employee).toEqual(objectName);
    });
  });

  // We are going to test for the getID() method inside the Employee class
  describe("getID", () => {
    it("Must return a string with the object ID", () => {
      // We define our control variable, in this case an ID, as '123'
      const objectID = '123';
      // We create an object with a class of Employee and we call the getID() method
      const employee = new Employee('Mike', '123', 'email@email.com').getID();
      // We expect our control variable and our object's value to be the same
      expect(employee).toEqual(objectID);
    });
  });

  // We are going to test for the getEmail() method inside the Employee class
  describe("getEmail", () => {
    it("Must return a string with the object email", () => {
      // We define our control varible, in this case an Email, as 'email@email.com'
      const objectEmail = 'email@email.com';
      // We create an object with a class of Employee and we call the getEmail() method
      const employee = new Employee('Mike', '123', 'email@email.com').getEmail();
      // We expect our control variable and our object's value to be the same
      expect(employee).toEqual(objectEmail);
    });
  });

  // We are goint to test for the getRole() method inside the Employee class
  describe("getRole", () => {
    it("Must return a string with the objects role, must always be Employee", () => {
      // We define our control variable, in this case a role, as 'Employee'
      const objectRole = 'Employee';
      // We create an object with a class of Employee and we call the getRole() method, notice we do not add a role in the parameters given to the obj
      const employee = new Employee('Mike', '123', 'email@email.com').getRole();
      // We expect our control variable and our object's value to be the same, the role is hard coded and must always be 'Employee' in this case
      expect(employee).toEqual(objectRole);
    });
  });

})