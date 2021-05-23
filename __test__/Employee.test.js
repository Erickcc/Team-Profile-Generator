const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("Must return a string with the object name", () => {
          const objectName = 'Mike';

          const employee = new Employee('Mike','123','email@email.com').getName();
          
          expect(employee).toEqual(objectName);
        });
      });

      describe("getID", () => {
        it("Must return a string with the object ID", () => {
          const objectID = '123';

          const employee = new Employee('Mike','123','email@email.com').getID();
          
          expect(employee).toEqual(objectID);
        });
      });

      describe("getEmail", () => {
        it("Must return a string with the object email", () => {
          const objectEmail = 'email@email.com';

          const employee = new Employee('Mike','123','email@email.com').getEmail();
          
          expect(employee).toEqual(objectEmail);
        });
      });

      describe("getRole", () => {
        it("Must return a string with the objects role, must always be Employee", () => {
          const objectRole = 'Employee';

          const employee = new Employee('Mike','123','email@email.com').getRole();
          
          expect(employee).toEqual(objectRole);
        });
      });

})