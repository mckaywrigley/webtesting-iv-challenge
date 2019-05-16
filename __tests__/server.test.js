const request = require("supertest");
const server = require("../index");

describe("Server tests.", () => {
  describe("GET /", () => {
    it("responds with 200", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
  });
});
