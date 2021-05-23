const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getGithub", () => {
        it("Must return a string with the object github profile", () => {
          const objectGithub = 'random';

          const engineer = new Engineer('Mike','123','email@email.com','random').getGithub();
          
          expect(engineer).toEqual(objectGithub);
        });
      });

      describe("getRole", () => {
        it("Must return a string with the object role, must always be 'Engineer'", () => {
          const objectRole = 'Engineer';

          const engineer = new Engineer('Mike','123','email@email.com','random').getRole();
          
          expect(engineer).toEqual(objectRole);
        });
      });

})