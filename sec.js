const serverForm = [
  { text: "ФИО", type: "text" },
  { text: "Адрес стройки", type: "text" },
  { text: "Загрузите Ваш файл", type: "file" },
];

// const formTypes = {
//   construction: {
//     name: "ФИО",
//     adress: "Адрес стройки",
//     inputType: ["text", "file"],
//   },
//   complaint: {
//     name: "ФИО",
//     adress: "Адрес жалобы",
//     inputType: ["text", "file"],
//   },
//   sign: {
//     name: "ФИО",
//     adress: "Адрес установки знака",
//     inputType: ["text", "file"],
//   },
//   trade: {
//     name: "ФИО",
//     adress: "Адрес места торговли",
//     inputType: ["text", "file"],
//   },
// };

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
    addDomForSubcat(JSON.parse(xhr.response));
  } else if (e.target.value == "complaint") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/complaint", false);
    xhr.send();
    addDomForSubcat(JSON.parse(xhr.response));
  } else if (e.target.value == "sign") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/sign", false);
    xhr.send();
    addDomForSubcat(JSON.parse(xhr.response));
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/trade", false);
    xhr.send();
    addDomForSubcat(JSON.parse(xhr.response));
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
    newFormDom();
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
  // if (e.target.value == "construction") {
  //   selector.id = 'subconstr'
  // } else if (e.target.value == "complaint") {
  //   selector.id = 'subcompl'
  // } else if (e.target.value == "sign") {
  //   selector.id = 'subsign'
  // } else {
  //   selector.id = 'subtrade'
  // }
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

// ---------new functions----------------
function newFormDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.id = "form_div";
  const form = document.createElement("form");
  const pName = newDomForForm(serverForm);
  const pAdress = newDomForForm(serverForm);
  const pFile = newDomForForm(serverForm);
  form.appendChild(pName);
  // form.appendChild(pName.input);
  form.appendChild(pAdress);
  // form.appendChild(pAdress.input);
  form.appendChild(pFile);
  // form.appendChild(pFile.input);
  div.appendChild(form);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}

function newDomForForm(arg) {
  for (i = 0; i < arg.length; i++) {
    const paragraf = document.createElement("p");
    const paragrafText = document.createTextNode(arg[i].text);
    console.log(paragrafText);
    paragraf.appendChild(paragrafText);
    const input = document.createElement("input");
    input.type = arg[i].type;
    console.log(typeof input);
  }
  return [{ text: paragraf, input: input }];
}

// --- call to backend ---

const xhr = new XMLHttpRequest();
xhr.open("GET", "http://127.0.0.1:8080/sign", false);

xhr.send();

console.log("xhr.body", xhr.body);
console.log("xhr.getAllResponseHeaders()", xhr.getAllResponseHeaders());
console.log("xhr.response", xhr.response);
console.log("xhr", xhr);

// -----------------варианты--------------------
// ---------- 1 variant ---------
// function addFormDom(obj) {
//     const fragment = document.createDocumentFragment();
//   const div = document.createElement("div");
//   div.id = "form_div";
//   const form = document.createElement("form");
//   for (i = 0; < obj.inputsText; i++) {
//       const pName = addDomForForm(obj.inputsText[i], obj.inputType[i]);
//       form.appendChild(pName.text);
//       form.appendChild(pName.input);
//     }
//     div.appendChild(form);
//   fragment.appendChild(div);
//   document.body.appendChild(fragment);
// }

// function addDomForForm(arg1, arg2) {
//     const paragraf = document.createElement("p");
//     const pNameText = document.createTextNode(arg1);
//     paragraf.appendChild(pNameText);
//     const input = document.createElement("input");
//     input.type = arg2;
//     return { text: paragraf, input: input };
//   }

//   const construction = {
//         inputsText: ["ФИО", "Адрес стройки","Загрузите Ваш файл"],
//         inputType: ["text", "text", "file"],
//       }

//   const complaint = {
//     inputsText: ["ФИО", "Адрес жалобы","Загрузите Ваш файл"],
//     inputType: ["text", "text", "file"],
//   }

//   const sign = {
//     inputsText: ["ФИО", "Адрес жалобы","Загрузите Ваш файл"],
//     inputType: ["text", "text", "file"],
//   }

// ---------- 2variant -------
// function addFormDom(arr) {
//   const fragment = document.createDocumentFragment();
//   const div = document.createElement("div");
//   div.id = "form_div";
//   const form = document.createElement("form");
//   for (i = 0; < arr; i++) {
//     const pName = addDomForForm(arr[i].text, arr[i].type);
//     form.appendChild(pName.text);
//     form.appendChild(pName.input);
//   }
//   div.appendChild(form);
//   fragment.appendChild(div);
//   document.body.appendChild(fragment);
// }

// function addDomForForm(arg1, arg2) {
//   const paragraf = document.createElement("p");
//   const pNameText = document.createTextNode(arg1);
//   paragraf.appendChild(pNameText);
//   const input = document.createElement("input");
//   input.type = arg2;
//   return { text: paragraf, input: input };
// }

//     construction: [
//       {text: "ФИО", type: "text"},
//       {text: "Адрес стройки", type: "text"},
//       {text: "Download thewr dfile", type: "file"}
//   ],

//     ------- snippet --------
// select.addEventListener("change", (e) => {
//   const subCutDiv = document.getElementById("select_div");
//   if (subCutDiv) {
//     subCutDiv.remove();
//   }
//   if (e.target.value == "construction") {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://127.0.0.1:8080/construction", false);
//     xhr.send();
//     arr = [
//       "--Выберите раздел--",
//       "строительство парковки",
//       "строительство ларька",
//       "строительство многоэтажки",
//     ]
//     serverForm = [
//       {text: "ФИО", type: "text"},
//       {text: "Адрес стройки", type: "text"},
//       {text: "Download thewr dfile", type: "file"}
//     ]
//     pseudoResponse = {arr: arr, form: serverForm}
//     addDomForSubcat(pseudoResponse.arr);
//     const form_div = document.getElementById("form_div");
//     if (form_div) {
//       form_div.remove();
//     }
//     const addedSel = document.getElementById("addedSel");
//     addedSel.addEventListener("change", (e) => {
//       const form_div = document.getElementById("form_div");
//       if (form_div) {
//         form_div.remove();
//       }
//       addFormDom(pseudoResponse.serverForm);
//     });

//   } else if (e.target.value == "complaint") {
// ------- snippet ---------
