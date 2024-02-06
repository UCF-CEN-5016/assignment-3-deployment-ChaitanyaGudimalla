const request = require("supertest");
// we also need our app for the correct routes!
const app = require("./app");
jest.setTimeout(10000);

describe("GET / ", () => {
  test("It should respond with an array of cities", async () => {
    await new Promise((r) => setTimeout(r, 5000));
    const response = await request(app).get("/cities");
    expect(response.body).toEqual(["Orlando", "Winter Park", "Oviedo", "Maitland"]);
    expect(response.statusCode).toBe(200);
  });
});
