const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getSchool", () => {
        it("Must return a string with the object school name", () => {
          const objectSchool = 'Best School';

          const intern = new Intern('Mike','123','email@email.com','Best School').getSchool();
          
          expect(intern).toEqual(objectSchool);
        });
      });

      describe("getRole", () => {
        it("Must return a string with the object role, must always be Intern", () => {
          const objectRole = 'Intern';

          const intern = new Intern('Mike','123','email@email.com','Best School').getRole();
          
          expect(intern).toEqual(objectRole);
        });
      });

})