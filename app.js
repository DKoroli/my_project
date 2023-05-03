const applicationTypes = {
  construction: [
    "--Выберите раздел--",
    "строительство парковки",
    "строительство ларька",
    "строительство многоэтажки",
  ],
  complaint: ["--Выберите раздел--", "жалоба на соседа", "жалоба на полицию"],
  sign: ["--Выберите раздел--", "разрешение на установку знака"],
};

const select = document.getElementById("dep");

select.addEventListener("change", (e) => {
  const subCutDiv = document.getElementById("select_div");
  if (subCutDiv) {
    subCutDiv.remove();
  }
  if (e.target.value == "construction") {
    addConstructionDom();
  } else if (e.target.value == "complaint") {
    addComplaintDom();
  } else {
    addSignDom();
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
    addFormDom();
  });
});

function addSelectorForConstruction() {
  const select = document.createElement("select");
  select.id = "addedSel";
  for (let i = 0; i < applicationTypes.construction.length; i++) {
    const option = document.createElement("option");
    let text = applicationTypes.construction[i];
    let str = document.createTextNode(text);
    option.appendChild(str);
    select.appendChild(option);
  }
  return select;
}

function addSelectorForComplaint() {
  const select = document.createElement("select");
  select.id = "addedSel";
  for (let i = 0; i < applicationTypes.complaint.length; i++) {
    const option = document.createElement("option");
    let text = applicationTypes.complaint[i];
    let str = document.createTextNode(text);
    option.appendChild(str);
    select.appendChild(option);
  }
  return select;
}

function addSelectorForSign() {
  const select = document.createElement("select");
  select.id = "addedSel";
  for (let i = 0; i < applicationTypes.sign.length; i++) {
    const option = document.createElement("option");
    let text = applicationTypes.sign[i];
    let str = document.createTextNode(text);
    option.appendChild(str);
    select.appendChild(option);
  }
  return select;
}

function addConstructionDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.id = "select_div";
  const selector = addSelectorForConstruction();
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}

function addComplaintDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.id = "select_div";
  const selector = addSelectorForComplaint();
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}

function addSignDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.id = "select_div";
  const selector = addSelectorForSign();
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}

function addFormDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.id = "form_div";
  const form = document.createElement("form");
  const pName = document.createElement("p");
  const pNameText = document.createTextNode("ФИО:");
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  const pAdress = document.createElement("p");
  const pAdressText = document.createTextNode("Ваш адрес:");
  const adressInput = document.createElement("input");
  adressInput.type = "text";
  const pFile = document.createElement("p");
  const pFileText = document.createTextNode("Загрузите Ваш файл:");
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  pName.appendChild(pNameText);
  pAdress.appendChild(pAdressText);
  pFile.appendChild(pFileText);
  form.appendChild(pName);
  form.appendChild(nameInput);
  form.appendChild(pAdress);
  form.appendChild(adressInput);
  form.appendChild(pFile);
  form.appendChild(fileInput);
  div.appendChild(form);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}
