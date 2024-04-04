const express = require("express");
const cors = require("cors");
const data = require("./static_data/data");
const bodyParser = require("body-parser");
const creatMyPDF = require('D:\\Coding\\my_project\\function.js');

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
  const date = new Date();
  let month = date.getMonth()+1;
  if (month<10) {
    month = '0' + month;
  }
  let day = date.getDate();
  if (day<10) {
    day = '0' + day;
  }
  const getDate = day + '.' + month + '.' + date.getFullYear();

const input = {
    name: values.name,
    idnp: values.idnp,
    mun: values.mun,
    str: values.street,
    num: values.num,
    ap: values.flat,
    tel: values.tel,
    email: values.mail,
    cad: values.cadNum,
    obmun: values.cadMun,
    obstr: values.cadStreet,
    obnum: values.cadStrNum,
    obap: values.cadFlat,
    object: values.obj,
    obyardage: values.area,
    date: getDate,
}
  const result = creatMyPDF(input)
  result.
then(res => {
    console.log('AAAAAA from test.js: ', res.filename)
}).
catch(err => {
    console.log('err', err)
})
});

app.listen(8080, function (req, res) {
  console.log("Server is running at port 8080");
});


