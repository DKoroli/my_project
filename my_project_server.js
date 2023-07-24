var http = require("http");

const applicationTypes = {
  construction: ["--Выберите раздел--", "Проектирование", "Строительство"],
  complaint: ["--Выберите раздел--", "жалоба на соседа", "жалоба на полицию"],
  sign: ["--Выберите раздел--", "разрешение на установку знака"],
  trade: [
    "--Выберите раздел--",
    "продажа пирожков",
    "продажа цветов",
    "продажа игрушек",
    "продажа продуктов",
  ],
};

const serverFormS = {
  construction: {
    planningPermission: [
      { text: "Нижеподписавшийся", type: "text" },
      { text: "IDNP/IDNO", type: "text" },
      { text: "Проживающий в муниципии", type: "text" },
      { text: "улица", type: "text" },
      { text: "№", type: "text" },
      { text: "квартира", type: "text" },
      { text: "контактный номер телефона", type: "text" },
      { text: "фдрес эл. почты", type: "text" },
      {
        text: "для проектирования на объект недвижимости/участок с кадастровым номером",
        type: "text",
      },
      { text: "расположенный в муниципии", type: "text" },
      { text: "улица", type: "text" },
      { text: "№", type: "text" },
      { text: "квартира", type: "text" },
      { text: "сертификат необходим для проектирования", type: "text" },
      { text: "площадь объекта на проектирование", type: "text" },
      {
        text: "Копия удостоверения личности (физические лица) или свидетельство о регистрации (юридические лица)",
        type: "file",
      },
      {
        text: "Отчет технической экспертизы, выполненный аттестованными техническими экспертами - в случае реконструкции, реставрации, изменения или усиления существующего объекта недвижимости (копия)",
        type: "file",
      },
    ],
    constructionPermission: [
      { text: "Нижеподписавшийся", type: "text" },
      { text: "Проживающий в муниципии", type: "text" },
      { text: "улица", type: "text" },
      { text: "№", type: "text" },
      { text: "квартира", type: "text" },
      { text: "контактный номер телефона", type: "text" },
      { text: "адрес эл. почты", type: "text" },
      {
        text: "разрешение на строительство для объекта недвижимости/участка с кадастровым номером",
        type: "text",
      },
      { text: "расположенный в муниципии", type: "text" },
      { text: "улица", type: "text" },
      { text: "№", type: "text" },
      { text: "квартира", type: "text" },
      { text: "разрешение на строительство необходимо для", type: "text" },
      {
        text: "Копия удостоверения личности (физические лица) или свидетельство о регистрации (юридические лица)",
        type: "file",
      },
      {
        text: "Отчет технической экспертизы, выполненный аттестованными техническими экспертами - в случае реконструкции, реставрации, изменения или усиления существующего объекта недвижимости (копия)",
        type: "file",
      },
    ],
  },
  complaint: [
    { text: "ФИО", type: "text" },
    { text: "Адрес правонарушения", type: "text" },
    { text: "Загрузите фотодоказательство", type: "file" },
  ],
  sign: [
    { text: "ФИО", type: "text" },
    { text: "Адрес установки знака", type: "text" },
  ],
  trade: [
    { text: "ФИО", type: "text" },
    { text: "Адрес торгового объекта", type: "text" },
    { text: "Загрузите согласования", type: "file" },
  ],
};

console.log("starting server...");
const server = http.createServer(handler);

server.listen(8080);

function handler(req, res) {
  console.log("url", req.url);
  console.log("method", req.method);

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  let response = {};

  console.log("URL:", req.url);

  if (req.url == "/construction") {
    response = {
      options: applicationTypes.construction,
      form: serverFormS.construction,
    };
    res.write(JSON.stringify(response));
  } else if (req.url == "/complaint") {
    response = {
      options: applicationTypes.complaint,
      form: serverFormS.complaint,
    };
    res.write(JSON.stringify(response));
  } else if (req.url == "/sign") {
    response = {
      options: applicationTypes.sign,
      form: serverFormS.sign,
    };
    res.write(JSON.stringify(response));
  } else if (req.url == "/trade") {
    response = {
      options: applicationTypes.trade,
      form: serverFormS.trade,
    };
    res.write(JSON.stringify(response));
  } else {
    response = { status: "error", message: "NOT FOUND" };
    res.write(JSON.stringify(response));
  }
  console.log(JSON.stringify(response));

  res.end();
}

console.log("in the end");
