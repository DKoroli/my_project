const express = require("express");
const app = express();

const applicationTypes = {
    construction: [
      { text: "--Выберите раздел--", value: "empty" },
      { text: "Проектирование", value: "projection" },
      { text: "Строительство", value: "construct" },
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
    construction: {
      planningPermission: [
        { text: "Нижеподписавшийся", type: "text", id: "name" },
        { text: "IDNP/IDNO", type: "text", id: "idnp" },
        { text: "Проживающий в муниципии", type: "text", id: "mun" },
        { text: "улица", type: "text", id: "street" },
        { text: "№", type: "text", id: "num" },
        { text: "квартира", type: "text", id: "flat" },
        { text: "контактный номер телефона", type: "text", id: "tel" },
        { text: "фдрес эл. почты", type: "text", id: "mail" },
        {
          text: "для проектирования на объект недвижимости/участок с кадастровым номером",
          type: "text",
          id: "cadNum",
        },
        { text: "расположенный в муниципии", type: "text", id: "cadMun" },
        { text: "улица", type: "text", id: "cadStreet" },
        { text: "№", type: "text", id: "cadStrNum" },
        { text: "квартира", type: "text", id: "cadFlat" },
        {
          text: "сертификат необходим для проектирования",
          type: "text",
          id: "obj",
        },
        { text: "площадь объекта на проектирование", type: "text", id: "area" },
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
        { text: "Нижеподписавшийся", type: "text", id: "name" },
        { text: "Проживающий в муниципии", type: "text", id: "mun" },
        { text: "улица", type: "text", id: "street" },
        { text: "№", type: "text", id: "num" },
        { text: "квартира", type: "text", id: "flat" },
        { text: "контактный номер телефона", type: "text", id: "tel" },
        { text: "адрес эл. почты", type: "text", id: "email" },
        {
          text: "разрешение на строительство для объекта недвижимости/участка с кадастровым номером",
          type: "text",
          id: "cadNumber",
        },
        { text: "расположенный в муниципии", type: "text", id: "cadMun" },
        { text: "улица", type: "text", id: "cadStreet" },
        { text: "№", type: "text", id: "cadStrNum" },
        { text: "квартира", type: "text", id: "cadFlat" },
        {
          text: "разрешение на строительство необходимо для",
          type: "text",
          id: "obj",
        },
        {
          text: "Копия удостоверения личности (физические лица) или свидетельство о регистрации (юридические лица);",
          type: "file",
        },
        {
          text: "Градостроительный сертификат для проектирования или констатационная справка в случае применения принципа молчаливого согласия(копия);",
          type: "file",
        },
        {
          text: "Нотариально заверенная согласие сособственников объекта недвижимости/участка, интересы которых могут быть непосредственно затронуты в процессе выполнения строительных работ и в период эксплуатации построенного объекта(копия);",
          type: "file",
        },
        {
          text: "*Выдержка из проектной документации в следующем объеме: пояснительная записка, генеральный план (ситуационный план, разбивочный план), фасады, цветовые решения, проект организации строительных работ. Для разрешения работ по инженерно-технической инфраструктуре в выдержке из проектной документации, фасады и цветовые решения не представляются(оригинал);",
          type: "file",
        },
        {
          text: "Единый отчет о проверке проектной документации для строительства, разработанный в соответствии с положением, утвержденным Правительством(копия);",
          type: "file",
        },
        {
          text: "Договор об авторском надзоре, подписанный заявителем(заказчиком) и проектировщиком(копия);",
          type: "file",
        },
        {
          text: "Выписка из протокола заседания Национального совета по историческим памятникам при Министерстве образования, культуры и исследований о даче положительного заключения на рабочий проект - в случае проектирования вмешательства в памятники истории, искусства и архитектуры или в зоны застройки, включенные в Перечень памятников Республики Молдова охраняемых государством(копия);",
          type: "file",
        },
        {
          text: "Сертификат об освобождении от археологического потенциала - в случаях предусмотренных частями (2) и (3) статьи 6 Закона об охране археологического наследия № 218/2010(копия);",
          type: "file",
        },
        {
          text: "Природоохранное разрешение, если требуется проведение оценки воздействия на окружающую среду и из характеристик планируемого объекта недвижимости очевидно, что на этом объекте будет осуществляться деятельность, предусмотренная Законом об оценке воздействия на окружающую среду № 86/2014(копия)",
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

  let response = {};

app.get("/construction", function (req, res) {
  res.json(applicationTypes.construction);
});
app.get("/complaint", function (req, res) {
  res.json(["--Выберите раздел--", "жалоба на соседа", "жалоба на полицию"]);
});
app.get("/sign", function (req, res) {
  res.json(["--Выберите раздел--", "разрешение на установку знака"]);
});
app.get("/trade", function (req, res) {
  res.json([
    "--Выберите раздел--",
    "продажа пирожков",
    "продажа цветов",
    "продажа игрушек",
    "продажа продуктов",
  ]);
});

app.listen(8080, function (req, res) {
  console.log("Server is running at port 8080");
});
