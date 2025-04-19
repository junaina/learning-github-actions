const request = require("supertest");
const app = require("../app");

//describe function to group related tests
describe("GET /", () => {
  it("should returna hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe("Hello from Express!");
  });
});
