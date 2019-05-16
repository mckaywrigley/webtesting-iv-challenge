const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  adventure
    .save(req.body)
    .then(adventure => res.status(201).json(adventure))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
