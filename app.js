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

function addBuildSelector() {
  const select = document.createElement("select");
  select.className = "build";
  for (let i = 0; i < config.build.length; i++) {
    const option = document.createElement("option");
    let text = config.build[i];
    let str = document.createTextNode(text);
    option.appendChild(str);
    select.appendChild(option);
  }
  return select;
}

function addComSelector() {
  const select = document.createElement("select");
  select.className = "complaint";
  for (let i = 0; i < config.complaint.length; i++) {
    const option = document.createElement("option");
    let text = config.complaint[i];
    let str = document.createTextNode(text);
    option.appendChild(str);
    select.appendChild(option);
  }
  return select;
}

function addSignSelector() {
  const select = document.createElement("select");
  select.className = "sign";
  for (let i = 0; i < config.sign.length; i++) {
    const option = document.createElement("option");
    let text = config.sign[i];
    let str = document.createTextNode(text);
    option.appendChild(str);
    select.appendChild(option);
  }
  return select;
}

function addBuildDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.className = "selector";
  const selector = addBuildSelector();
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}

function addComplaintDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.className = "selector";
  const selector = addComSelector();
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}

function addSignDom() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.className = "selector";
  const selector = addSignSelector();
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}
