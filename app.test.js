const request = require("supertest");
const app = require("./app");
jest.setTimeout(10000);

describe("GET /joke1", () => {
  test("It should respond with a joke setup", async () => {
    const response = await request(app).get("/joke1");
    expect(response.text).toEqual(expect.stringContaining("Why don't scientists trust atoms?"));
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /joke2", () => {
  test("It should respond with a joke setup", async () => {
    const response = await request(app).get("/joke2");
    expect(response.text).toEqual(expect.stringContaining("What did one plate say to the other plate?"));
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /punchline1", () => {
  test("It should respond with a joke setup and punchline", async () => {
    const response = await request(app).get("/punchline1");
    expect(response.text).toEqual(expect.stringContaining("Why don't scientists trust atoms? Because they make up everything!"));
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /punchline2", () => {
  test("It should respond with a joke setup and punchline", async () => {
    const response = await request(app).get("/punchline2");
    expect(response.text).toEqual(expect.stringContaining("What did one plate say to the other plate? Dinner is on me!"));
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /joke", () => {
  test("It should respond with a random joke setup and punchline", async () => {
    const response = await request(app).get("/joke");
    expect(response.text).toMatch(/(Why don't scientists trust atoms?|What did one plate say to the other plate?)/);
    expect(response.statusCode).toBe(200);
  });
});
