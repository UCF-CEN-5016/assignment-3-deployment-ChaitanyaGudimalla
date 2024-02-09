const request = require("supertest");
const app = require("./app");
jest.setTimeout(10000);

describe("GET /cities", () => {
  test("It should respond with an array of cities", async () => {
    await new Promise((r) => setTimeout(r, 5000));
    const response = await request(app).get("/cities");
    expect(response.body).toEqual(["Orlando", "Winter Park", "Oviedo", "Maitland"]);
    expect(response.statusCode).toBe(200);
  });
});

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

describe("GET /joke3", () => {
  test("It should respond with a joke setup", async () => {
    const response = await request(app).get("/joke3");
    expect(response.text).toEqual(expect.stringContaining("Why did the scarecrow win an award?"));
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /joke4", () => {
  test("It should respond with a joke setup", async () => {
    const response = await request(app).get("/joke4");
    expect(response.text).toEqual(expect.stringContaining("Did you hear about the mathematician who's afraid of negative numbers?"));
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /joke5", () => {
  test("It should respond with a joke setup", async () => {
    const response = await request(app).get("/joke5");
    expect(response.text).toEqual(expect.stringContaining("Why did the bicycle fall over?"));
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

describe("GET /punchline3", () => {
  test("It should respond with a joke setup and punchline", async () => {
    const response = await request(app).get("/punchline3");
    expect(response.text).toEqual(expect.stringContaining("Why did the scarecrow win an award? Because he was outstanding in his field!"));
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /punchline4", () => {
  test("It should respond with a joke setup and punchline", async () => {
    const response = await request(app).get("/punchline4");
    expect(response.text).toEqual(expect.stringContaining("Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!"));
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /punchline5", () => {
  test("It should respond with a joke setup and punchline", async () => {
    const response = await request(app).get("/punchline5");
    expect(response.text).toEqual(expect.stringContaining("Why did the bicycle fall over? Because it was two-tired!"));
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /joke", () => {
  test("It should respond with a random joke setup and punchline", async () => {
    const response = await request(app).get("/joke");
    const jokes = [      "Why don't scientists trust atoms? Because they make up everything!",      "What did one plate say to the other plate? Dinner is on me!",      "Why did the scarecrow win an award? Because he was outstanding in his field!",      "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",      "Why did the bicycle fall over? Because it was two-tired!"    ];
    expect(jokes).toContain(response.text);
    expect(response.statusCode).toBe(200);
  });
});

