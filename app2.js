//Required package
const pdf = require("pdf-creator-node");
const fs = require("fs");

// Read HTML Template
const html = fs.readFileSync("template2.html", "utf8");

const options = {
  format: "A4",
  orientation: "portrait",
  border: "0mm",
  header: {
    height: "15mm",
  },
  footer: {
    height: "28mm",
  },
};



const date = new Date();
const month = '0' + (date.getMonth()+1);
const getDate = date.getDate() + '.' + month + '.' + date.getFullYear();



const datas = {
    name: 'Дмитрий Королюк',
    idnp: '2002004092146',
    mun: 'Бэлць',
    str: 'Дечебал',
    num: '168',
    ap: '26',
    tel: '079330243',
    email: 'dimakoroliuk@gmail.com',
    cad: '0.30055-1025-100',
    obmun: 'Бэлць',
    obstr: 'А. Руссо',
    obnum: '14А',
    obap: '',
    object: 'Торговый павильон',
    obyardage: '78',
    date: getDate,
}

// const users = [
//   {
//     name: "Shyam",
//     age: "26",
//   },
//   {
//     name: "Navjot",
//     age: "26",
//   },
//   {
//     name: "Vitthal",
//     age: "26",
//   },
// ];

const document = {
  html: html,
  data: {
    users: datas,
  },
  path: "./output2.pdf",
  type: "",
};

pdf
  .create(document)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
