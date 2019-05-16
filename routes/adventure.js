const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  Adventure.save(req.body)
    .then(adventure => res.status(201).json(adventure))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  Adventure.delete(req.params.id)
    .then(adventure => res.status(200).json(adventure))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
