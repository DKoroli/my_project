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
    addDomForSubcat(applicationTypes.construction);
  } else if (e.target.value == "complaint") {
    addDomForSubcat(applicationTypes.complaint);
  } else {
    addDomForSubcat(applicationTypes.sign);
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

function addSelectForSubcat(arg) {
  const select = document.createElement("select");
  select.id = "addedSel";
  for (let i = 0; i < arg.length; i++) {
    const option = document.createElement("option");
    let text = arg[i];
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

function addFormDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.id = "form_div";
  const form = document.createElement("form");
  const pName = addDomForForm("ФИО:", "text");
  const pAdress = addDomForForm("Ваш адрес", "text");
  const pFile = addDomForForm("Загрузите Ваш файл:", "file");
  form.appendChild(pName.text);
  form.appendChild(pName.input);
  form.appendChild(pAdress.text);
  form.appendChild(pAdress.input);
  form.appendChild(pFile.text);
  form.appendChild(pFile.input);
  div.appendChild(form);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}

function addDomForForm(arg1, arg2) {
  const paragraf = document.createElement("p");
  const pNameText = document.createTextNode(arg1);
  paragraf.appendChild(pNameText);
  const input = document.createElement("input");
  input.type = arg2;
  return { text: paragraf, input: input };
}
