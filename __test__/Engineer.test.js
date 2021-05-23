const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  // We are going to test for the getGithub() method inside the Engineer class
  describe("getGithub", () => {
    it("Must return a string with the object github profile", () => {
      // We define our control variable, in this case a github profile, as 'random'
      const objectGithub = 'random';
      // We create an object with a class of Engineer and we call the getGithub() method
      const engineer = new Engineer('Mike', '123', 'email@email.com', 'random').getGithub();
      // We expect our control variable and our object's value to be the same
      expect(engineer).toEqual(objectGithub);
    });
  });
  // We are going to test for the getRole() method inside the Engineer class
  describe("getRole", () => {
    it("Must return a string with the object role, must always be 'Engineer'", () => {
      // We define our control variable, in this case a role, as 'Engineer'
      const objectRole = 'Engineer';
      // We create an object with a class of Engineer and we call the getRole() method, notice we do not add a role in the parameters given to the obj
      const engineer = new Engineer('Mike', '123', 'email@email.com', 'random').getRole();
      // We expect our control variable and our object's value to be the same, the role is hard coded and must always be 'Egineer' in this case
      expect(engineer).toEqual(objectRole);
    });
  });

})