const config = {
  build: [
    "строительство парковки",
    "строительство ларька",
    "строительство многоэтажки",
  ],
  complaint: ["жалоба на соседа", "жалоба на полицию"],
  sign: ["разрешение на установку знака"],
};

// переменные
const departments = ["строительство", "жалобы", "автознаки"];
const requestsTopics = [
  "строительство парковки",
  "строительство ларька",
  "строительство многоэтажки",
  "жалоба на соседа",
  "жалоба на полицию",
  "разрешение на установку знака",
];

const request = {
  topic: "жалоба на полицию",
  email: "dimakoroliuk@gmail.com",
};

const docs = [
  "право на владение зем участком",
  "согласование с сетидержателями",
  "адрес",
  "паспорт/сертификат",
  "согласование с ИП",
  "фото доказательство",
];

const emails = {
  строительство: "stroinazdorovie@balti.md",
  жалобы: "pidoritut@balti.md",
  автознаки: "huiasetyimeeshbiznes@balti.md",
};

// функции
function getDepartment(req) {
  let a;
  if (req.includes("строительство")) {
    a = departments[0];
  } else if (req.includes("жалоба")) {
    a = departments[1];
  } else if (req.includes("знака")) {
    a = departments[2];
  }
  return a;
}

function getDocument(req) {
  let b;
  if (req.includes("строительство")) {
    b = [docs[0], docs[1], docs[3]];
  } else if (req.includes("жалоба")) {
    b = [docs[2], docs[3], docs[5]];
  } else if (req.includes("знака")) {
    a = [docs[0], docs[2], docs[4]];
  }
  return b;
}

function getResponse(req) {
  const dep = getDepartment(req);
  const doc = getDocument(req);
  const docStr = doc.join(", ");
  const mess = {
    title: `Вы обратились в отдел ${dep}`,
    message: `Пожалуйста, предоставьте следующие документы: ${docStr}`,
  };
  return mess;
}

function sendEmail(emailAdress, text) {
  console.log(text);
}

function processRequest(req) {
  const dep = getDepartment(req);
  const email = emails[dep];
  const depText = `Получен запрос от пользователя с имейлом ${request.email}`;
  const depMail = sendEmail(email, depText);
  const decText = `Ваш запрос отправлен в Управление - ${getDepartment(req)}`;
  const decMail = sendEmail(email, decText);
  return getResponse(req);
}

// всякий щит

const res4 = processRequest(request.topic);

console.log(res4);

const select = document.getElementById("dep");

select.addEventListener("change", (e) => {
  if (e.target.value == "build") {
    addBuildDom();
  } else if (e.target.value == "complaint") {
    addComplaintDom();
  } else {
    addSignDom();
  }
});

// for (let i = 0; i < config.build.length; i++) {
//   let fragment = document.createDocumentFragment();
//   let div = document.createElement("div");
//   console.log("type of div ", typeof div);
//   console.log("div = ", div);
//   let paragraf = document.createElement("p");
//   console.log("type of paragraf ", typeof paragraf);
//   console.log("paragraf = ", paragraf);
//   let text = config.build[i];
//   console.log("type of text ", typeof text);
//   console.log("text = ", text);
//   paragraf.appendChild(text);
//   div.appendChild(paragraf);
//   fragment.appendChild(div);
//   document.body.appendChild(fragment);

//   console.log(i);
// }

function addBuildDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.className = "selector";
  const selector = document.createElement("select");
  selector.className = "topics";
  const option = document.createElement("option");
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  const optionText = document.createTextNode("--Выберите раздел--");
  const option1Text = document.createTextNode("строительство парковки");
  const option2Text = document.createTextNode("строительство ларька");
  const option3Text = document.createTextNode("строительство многоэтажки");
  option.appendChild(optionText);
  option1.appendChild(option1Text);
  option2.appendChild(option2Text);
  option3.appendChild(option3Text);
  selector.appendChild(option);
  selector.appendChild(option1);
  selector.appendChild(option2);
  selector.appendChild(option3);
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
  console.log("type of function div ", typeof div);
}


function addComplaintDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.className = "selector";
  const selector = document.createElement("select");
  selector.className = "topics";
  const option = document.createElement("option");
  const option4 = document.createElement("option");
  const option5 = document.createElement("option");
  const optionText = document.createTextNode("--Выберите раздел--");
  const option4Text = document.createTextNode("жалоба на соседа");
  const option5Text = document.createTextNode("жалоба на полицию");
  option.appendChild(optionText);
  option4.appendChild(option4Text);
  option5.appendChild(option5Text);
  selector.appendChild(option);
  selector.appendChild(option4);
  selector.appendChild(option5);
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}

function addSignDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.className = "selector";
  const selector = document.createElement("select");
  selector.className = "topics";
  const option = document.createElement("option");
  const option6 = document.createElement("option");
  const optionText = document.createTextNode("--Выберите раздел--");
  const option6Text = document.createTextNode("разрешение на установку знака");
  option.appendChild(optionText);
  option6.appendChild(option6Text);
  selector.appendChild(option);
  selector.appendChild(option6);
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}
