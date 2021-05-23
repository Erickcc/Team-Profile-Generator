const Intern = require("../lib/intern");

describe("Intern", () => {
  // We are going to test for the getSchool() method inside the Intern class
  describe("getSchool", () => {
    it("Must return a string with the object school name", () => {
      // We define our control variable, in this case a school name, as 'Best School'
      const objectSchool = 'Best School';
      // We create an object with a class of Intern and we call the getSchool() method
      const intern = new Intern('Mike', '123', 'email@email.com', 'Best School').getSchool();
      // We expect our control variable and our object's value to be the same
      expect(intern).toEqual(objectSchool);
    });
  });
  // We are going to test for the getRole() method inside the Intern class
  describe("getRole", () => {
    it("Must return a string with the object role, must always be Intern", () => {
      // We define our control variable, in this case a role, as 'Intern'
      const objectRole = 'Intern';
      // We create an object with a class of Intern and we call the getRole() method, notice we do not add a role in the parameters given to the obj
      const intern = new Intern('Mike', '123', 'email@email.com', 'Best School').getRole();
      // We expect our control variable and our object's value to be the same, the role is hard coded and must always be 'Intern' in this case
      expect(intern).toEqual(objectRole);
    });
  });

})