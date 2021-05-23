const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("getOfficeNumber", () => {
        it("Must return a string with the object office number", () => {
          const objectOfficeNumber = '123456789';

          const manager = new Manager('Mike','123','email@email.com','123456789').getOfficeNumber();
          
          expect(manager).toEqual(objectOfficeNumber);
        });
      });

      describe("getRole", () => {
        it("Must return a string with the object role, must always be Manager", () => {
          const objectRole = 'Manager';

          const manager = new Manager('Mike','123','email@email.com','123456789').getRole();
          
          expect(manager).toEqual(objectRole);
        });
      });

})