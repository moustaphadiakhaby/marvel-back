const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
