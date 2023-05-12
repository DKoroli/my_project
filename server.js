var http = require("http");

const applicationTypes = {
  construction: [
    "--Выберите раздел--",
    "строительство парковки",
    "строительство ларька",
    "строительство многоэтажки",
  ],
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
  construction: [
    { text: "ФИО", type: "text" },
    { text: "Адрес стройки", type: "text" },
    { text: "Загрузите Ваш файл", type: "file" },
  ],
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

// serverReq = {url: 'asdasd', method: 'GET'}
// serverRes = {writer: function(){}}
// handler(serverReq, serverRes)

server.listen(8080);

function handler(req, res) {
  console.log("url", req.url);
  console.log("method", req.method);

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  if (req.url == "/construction") {
    const response = {
      options: applicationTypes.construction,
      form: serverFormS.construction,
    };
    res.write(JSON.stringify(response));
  } else if (req.url == "/complaint") {
    const response = {
      options: applicationTypes.complaint,
      form: serverFormS.complaint,
    };
    res.write(JSON.stringify(response));
  } else if (req.url == "/sign") {
    const response = {
      options: applicationTypes.sign,
      form: serverFormS.sign,
    };
    res.write(JSON.stringify(response));
  } else if (req.url == "/trade") {
    const response = {
      options: applicationTypes.trade,
      form: serverFormS.trade,
    };
    res.write(JSON.stringify(response));
  } else {
    const response = { status: "error", message: "NOT FOUND" };
    res.write(JSON.stringify(response));
  }
  
  res.end();
}

console.log(response);
console.log("in the end");
