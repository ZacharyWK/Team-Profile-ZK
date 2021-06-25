const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Aname","email@email.com","101","gitGudHub");

test("creates Engineer obj", 
()=> {
expect(engineer.name).toBe("Aname");
expect(engineer.email).toBe("email@email.com");
expect(engineer.id).toBe("101");
expect(engineer.gitHub).toBe("gitGudHub");
});

test("Gets GitHub Account", 
()=> {
expect(engineer.getGitHub()).
toEqual(expect.stringContaining(engineer.gitHub.toString()))
});

test("Gets Role: Engineer", 
()=> {
expect(engineer.getRole()).
toBe("Engineer")
});