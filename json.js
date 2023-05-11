const obj = {
  name: "Dimon",
  age: 15,
  gender: "male",
  footbal_team: "Real Madrid",
};

let str = JSON.stringify(obj);
str = '{"name":"Dimon","age":15,"gender":"male","footbal_team":"Real Madrid"}'
console.log(str)

const parsedObj = JSON.parse(str)

console.log(parsedObj.gender)