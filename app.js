const select = document.getElementById("dep");

select.addEventListener("change", (e) => {
  const subCutDiv = document.getElementById("select_div");
  if (subCutDiv) {
    subCutDiv.remove();
  }
  let formData;
  if (e.target.value == "construction") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/construction", false);
    xhr.send();
    const jsonParsed = JSON.parse(xhr.response);
    addDomForSubcat(jsonParsed);
    formData = jsonParsed.form;
  } else if (e.target.value == "complaint") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/complaint", false);
    xhr.send();
    const jsonParsed = JSON.parse(xhr.response);
    addDomForSubcat(jsonParsed.options);
    formData = jsonParsed.form;
  } else if (e.target.value == "sign") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/sign", false);
    xhr.send();
    const jsonParsed = JSON.parse(xhr.response);
    addDomForSubcat(jsonParsed.options);
    formData = jsonParsed.form;
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/trade", false);
    xhr.send();
    const jsonParsed = JSON.parse(xhr.response);
    addDomForSubcat(jsonParsed.options);
    formData = jsonParsed.form;
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
    let arrId = [];
    let arrIdValue = [];
    const button = document.getElementById("btnSend");
    button.addEventListener("click", () => {
      for (let i = 0; i < jsonParsed.length; i++) {
        const jsonId = jsonParsed[i].id;
        arrId.push(jsonId);
        const inputById = document.getElementById(arrId[i]);
        arrIdValue.push(inputById.value);
      }
      console.log(arrId);
      console.log(typeof arrId);
      console.log(arrIdValue);
      console.log(typeof arrIdValue);
    });
  });
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

// --- call to backend ---
