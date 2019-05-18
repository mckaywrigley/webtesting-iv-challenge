const express = require("express");

const app = express();
app.use(express.json());

const adventureRoutes = require("./routes/adventure");

app.use("/api/adventure", adventureRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});

module.exports = app;
