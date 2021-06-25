const Manager = require("../lib/Manager");
const manager = new Manager("Aname","email@email.com","101","AZ101");

test("creates Manager obj", 
()=> {
expect(manager.name).toBe("Aname");
expect(manager.email).toBe("email@email.com");
expect(manager.id).toBe("101");
expect(manager.officeNumber).toBe("AZ101");
});

test("Gets Office Number", 
()=>{
expect(manager.getOfficeNumber()).
toEqual(expect.stringContaining(manager.officeNumber.toString()))
});

test("Gets Role: Manager", 
()=> {
expect(manager.getRole()).
toBe("Manager")
});