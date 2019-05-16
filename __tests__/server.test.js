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

  describe("POST /adventures", () => {
    it("creates adventure and responds with 201", async () => {
      const adventure = { name: "Scuba Diving" };

      const res = await request(server)
        .post("/adventure")
        .send(adventure);

      expect(res.status).toBe(201);
    });

    it('responds with 400 if adventure is invalid', () => {
        const adventure = {};

        const res = await request(server)
        .post("/adventure")
        .send(adventure);

      expect(res.status).toBe(400);
    })
  });
});
