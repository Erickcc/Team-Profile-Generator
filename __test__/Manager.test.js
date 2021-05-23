const Manager = require("../lib/manager");

describe("Manager", () => {
  // We are going to test for the getOfficeNumber() method inside the Manager class
  describe("getOfficeNumber", () => {
    it("Must return a string with the object office number", () => {
      // We define our control variable, in this case an office number, as '123456789'
      const objectOfficeNumber = '123456789';
      // We create an object with a class of Managaer and we call the getOfficeNumber() method
      const manager = new Manager('Mike', '123', 'email@email.com', '123456789').getOfficeNumber();
      // We expect our control variable and our object's value to be the same
      expect(manager).toEqual(objectOfficeNumber);
    });
  });
  // We are going to test for the getRole() method inside the Manager class
  describe("getRole", () => {
    it("Must return a string with the object role, must always be Manager", () => {
      // We define our control variable, in this case a role, as 'Manager'
      const objectRole = 'Manager';
      // We create an object with a class of Manager and we call the getRole() method, notice we do not add a role in the parameters given to the obj
      const manager = new Manager('Mike', '123', 'email@email.com', '123456789').getRole();
      // We expect our control variable and our object's value to be the same, the role is hard coded and must always be 'Manager' in this case
      expect(manager).toEqual(objectRole);
    });
  });

})