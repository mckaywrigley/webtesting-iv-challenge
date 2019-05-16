const db = require("../dbConfig");

module.exports = {
  save,
  remove
};

function save(adventure) {
  const [id] = db("adventures").insert(adventure);
  return db("adventures")
    .where({ id })
    .first();
}

function remove(id) {
  return db("adventures")
    .where({ id })
    .del();
}
