const express = require("express");
const cors = require("cors");
const data = require("./static_data/data");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();
app.use(cors());

app.get("/construction", function (req, res) {
  res.json(data.applicationTypes.construction);
});
app.get("/complaint", function (req, res) {
  res.json(data.applicationTypes.complaint);
});
app.get("/sign", function (req, res) {
  res.json(data.applicationTypes.sign);
});
app.get("/trade", function (req, res) {
  res.json(data.applicationTypes.trade);
});
app.get("/construction/projection", function (req, res) {
  res.json(data.serverFormS.construction.planningPermission);
});
app.get("/construction/construct", function (req, res) {
  res.json(data.serverFormS.construction.constructionPermission);
});

app.post("/sendvalues", jsonParser, function (req, res) {
  const values = req.body;
  res.json("Ваша заявка принята.");
  console.log("Here is your array.");
  console.log(values);
});

app.listen(8080, function (req, res) {
  console.log("Server is running at port 8080");
});
