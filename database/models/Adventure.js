const db = require("../dbConfig");

module.exports = {
  insert,
  remove
};

async function insert(adventure) {
  const [id] = await db("adventures").insert(adventure);
  return db("adventures")
    .where({ id })
    .first();
}

async function remove(id) {
  return await db("adventures")
    .where({ id })
    .del();
}
