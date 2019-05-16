const request = require("supertest");
const server = require("../index");

describe("Server tests.", () => {
  describe("POST /adventures", () => {
    it("creates adventure and responds with 201", async () => {
      const adventure = { name: "Scuba Diving" };

      const res = await request(server)
        .post("/api/adventure")
        .send(adventure);

      expect(res.status).toBe(201);
    });

    it("responds with 400 if adventure is invalid", async () => {
      const adventure = {};

      const res = await request(server)
        .post("/api/adventure")
        .send(adventure);

      expect(res.status).toBe(400);
    });
  });

  describe("DELETE /adventure/:id", () => {
    it("deletes adventure with id and responds with 200", async () => {
      const res = await request(server).delete("/api/adventure/1");

      expect(res.status).toBe(200);
    });

    it("responds with 404 if id not provided or found", async () => {
      const res = await request(server).delete("/adventure/100");

      expect(res.status).toBe(404);
    });
  });
});
