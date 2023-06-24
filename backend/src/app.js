const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/healthcheck", (req, res) => {
  res.send("OK");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
