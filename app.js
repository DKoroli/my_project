// 1) теперь запрос от пользователя будет не просто строкой, а объектом
// request = {req: "жалоба на полицию", email: "user@email.com"}
//
// 2) sendEmail() теперь должна принимать еще и тест письма в параметры
// sendEmail(emailAddress, text) - внутри будет писать на какой имейл отправка и какой там будет текст письма
//
// 3) функция processRequest() теперь принимает не строку как сейчас, а объект из пункта (1)
//
// 4) внутри функции processRequest() изменится отправка имейла - надо добавить текст в департамент, можно
// что-то типа "получен запрос от пользователя с имейлом *таким-то*(ты его знаешь из запроса)"
//
// 5) внутри функции processRequest() добавится еще одна отправка имейла, пользователю
// sendEmail("имейл пользовател", "ваш запрос получен и принят в обработку")
// "Ваш запрос отправлен в Управление"
// "Получено заявление по вопросу от пользователя"
//
// Итого: теперь будет две отправки письма - на почту департамента и пользователю который написал
//
// p.s. задачи выполняем: сначала (1), проверяем со мной
// потом (2), (3), (4) - они связаны и как бы про одно и то же,
// ну и потом (5)

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
// const res = getDepartment(request.topic);
// const res2 = getDocument("жалоба на полицию");
// const res3 = getResponse("жалоба на полицию");
const res4 = processRequest(request.topic);

console.log(res4);

function addFragment() {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.className = "selector";
  const selector = document.createElement("select");
  selector.className = "topics";
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  const option4 = document.createElement("option");
  const option5 = document.createElement("option");
  const option6 = document.createElement("option");
  const option1Text = document.createTextNode("строительство парковки");
  const option2Text = document.createTextNode("строительство ларька");
  const option3Text = document.createTextNode("строительство многоэтажки");
  const option4Text = document.createTextNode("жалоба на соседа");
  const option5Text = document.createTextNode("жалоба на полицию");
  const option6Text = document.createTextNode("разрешение на установку знака");
  option1.appendChild(option1Text);
  option2.appendChild(option2Text);
  option3.appendChild(option3Text);
  option4.appendChild(option4Text);
  option5.appendChild(option5Text);
  option6.appendChild(option6Text);
  selector.appendChild(option1);
  selector.appendChild(option2);
  selector.appendChild(option3);
  selector.appendChild(option4);
  selector.appendChild(option5);
  selector.appendChild(option6);
  div.appendChild(selector);
  fragment.appendChild(div);
  document.body.appendChild(fragment);
}
addFragment();
