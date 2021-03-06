const express = require("express");
const router = express.Router();

const Adventure = require("../database/models/Adventure");

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "No name." });
  }
  Adventure.insert(req.body)
    .then(adventure => res.status(201).json(adventure))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  Adventure.remove(req.params.id)
    .then(adventure => res.status(200).json(adventure))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
