const express = require("express");
const cors = require("cors");
const data = require("./static_data/data");

const app = express();
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

app.listen(8080, function (req, res) {
  console.log("Server is running at port 8080");
});
