const Employee = require("../lib/Employee");
const employee = new Employee("Aname","email@email.com","101");


test("creates employee obj", 
()=> {
expect(employee.name).toBe("Aname");
expect(employee.email).toBe("email@email.com");
expect(employee.id).toBe("101");
});

test("gets employee name", 
()=> {
expect(employee.getName()).
toEqual(expect.stringContaining(employee.name.toString()))
});

test("gets employee ID", 
()=> {
expect(employee.getId()).
toEqual(expect.stringContaining(employee.id.toString()))
});

test("gets employee Email", 
()=> {
expect(employee.getEmail()).
toEqual(expect.stringContaining(employee.email.toString()))
});


test("gets employee Role", 
()=> {
expect(employee.getRole()).toBe("Employee")
});

