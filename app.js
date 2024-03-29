const select = document.getElementById("dep");

select.addEventListener("change", (e) => {
  const subCutDiv = document.getElementById("select_div");
  if (subCutDiv) {
    subCutDiv.remove();
  }

  if (e.target.value == "construction") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/construction", false);
    xhr.send();
    const jsonParsed = JSON.parse(xhr.response);
    addDomForSubcat(jsonParsed);
  } else if (e.target.value == "complaint") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/complaint", false);
    xhr.send();
    const jsonParsed = JSON.parse(xhr.response);
    addDomForSubcat(jsonParsed);
  } else if (e.target.value == "sign") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/sign", false);
    xhr.send();
    const jsonParsed = JSON.parse(xhr.response);
    addDomForSubcat(jsonParsed);
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/trade", false);
    xhr.send();
    const jsonParsed = JSON.parse(xhr.response);
    addDomForSubcat(jsonParsed);
  }
  const form_div = document.getElementById("form_div");
  if (form_div) {
    form_div.remove();
  }
  const addedSel = document.getElementById("addedSel");
  addedSel.addEventListener("change", (e) => {
    const form_div = document.getElementById("form_div");
    if (form_div) {
      form_div.remove();
    }
    let jsonParsed = [];
    if (e.target.value == "projection") {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "http://127.0.0.1:8080/construction/projection", false);
      xhr.send();
      jsonParsed = JSON.parse(xhr.response);
      console.log(jsonParsed);
      newFormDom(jsonParsed);
    } else if (e.target.value == "construct") {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "http://127.0.0.1:8080/construction/construct", false);
      xhr.send();
      jsonParsed = JSON.parse(xhr.response);
      console.log(jsonParsed);
      newFormDom(jsonParsed);
    }

    let idWithValues = {}; // {mun: "Balti", idnp: "2002004092146", ...}
    const button = document.getElementById("btnSend");
    button.addEventListener("click", () => {
      for (let i = 0; i < jsonParsed.length; i++) {
        const jsonId = jsonParsed[i].id;
        const inputById = document.getElementById(jsonId);
        idWithValues[jsonId] = inputById.value;
      }
      const response = JSON.response;
      sendIdValues(idWithValues, (response) => {
        alert(response);
      });
      const form_div = document.getElementById("form_div");
      const subCutDiv = document.getElementById("select_div");
      if (form_div || subCutDiv) {
        document.location.reload();
      }
    });
  });
});

const button_for_modal = document.getElementById("button_for_modal");
const modal_window = document.getElementById("modal_window");
button_for_modal.addEventListener("click", function () {
  modal_window.style.display = "block";
  const button_to_close = document.getElementById("button");
  button_to_close.onclick = function () {
    modal_window.style.display = "none";
  };
});

function addSelectForSubcat(arg) {
  const select = document.createElement("select");
  select.id = "addedSel";
  for (let i = 0; i < arg.length; i++) {
    const option = document.createElement("option");
    option.value = arg[i].value;
    let text = arg[i].text;
    let str = document.createTextNode(text);
    option.appendChild(str);
    select.appendChild(option);
  }
  return select;
}

function addDomForSubcat(arr) {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.id = "select_div";
  const selector = addSelectForSubcat(arr);
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}

function newFormDom(arr) {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.id = "form_div";
  const btn = document.createElement("button");
  btn.id = "btnSend";
  const btnText = document.createTextNode("Отправить");
  const form = document.createElement("form");
  for (i = 0; i < arr.length; i++) {
    const result = createFormRow(arr[i].text, arr[i].type, arr[i].id);
    form.appendChild(result.text);
    form.appendChild(result.input);
  }
  div.appendChild(form);
  btn.appendChild(btnText);
  div.appendChild(btn);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}

function createFormRow(text, type, id) {
  const paragraf = document.createElement("p");
  const pNameText = document.createTextNode(text);
  paragraf.appendChild(pNameText);
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  return { text: paragraf, input: input };
}

function sendIdValues(body, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:8080/sendvalues", false);
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.response);
    callback(response);
  });
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify(body));
}

// --- call to backend ---

// ----- pdf ---------
//Required package
const pdf = require("pdf-creator-node");
const fs = require("fs");

// Read HTML Template
const html = fs.readFileSync("template.html", "utf8");

let options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
      height: "45mm",
      contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
  },
  footer: {
      height: "28mm",
      contents: {
          first: 'Cover page',
          2: 'Second page', // Any page number is working. 1-based index
          default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
          last: 'Last Page'
      }
  }
};

let users = [
  {
    name: "Shyam",
    age: "26",
  },
  {
    name: "Navjot",
    age: "26",
  },
  {
    name: "Vitthal",
    age: "26",
  },
];
var document = {
  html: html,
  data: {
    users: users,
  },
  path: "./output.pdf",
  type: "",
};
// By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
