const Intern = require("../lib/Intern");
const intern = new Intern("Aname","email@email.com","101","Florida University");

test("creates Intern obj", 
()=> {
expect(intern.name).toBe("Aname");
expect(intern.email).toBe("email@email.com");
expect(intern.id).toBe("101");
expect(intern.school).toBe("Florida University");
});

test("Gets School Name", 
()=> {
expect(intern.getSchool()).
toEqual(expect.stringContaining(intern.school.toString()))
});

test("Gets Role: Intern", 
()=> {
expect(intern.getRole()).
toBe("Intern")
});