const fs = require("fs");

let rawdata = fs.readFileSync("./json/data.json");
let data = JSON.parse(rawdata);

const meeting = (input) => {
  const items = data.filter((a) => a.placement.name.match(input));
  console.log({ items });
};
meeting("Meeting Room");

const elektro = (input) => {
  const devices = data.filter((a) => a.type.match(input)).map((b) => b.name);
  console.log({ devices });
};
elektro("electronic");

const furnitur = (input) => {
  const furniture = data.filter((a) => a.type.match(input)).map((b) => b.name);
  console.log({ furniture });
};
furnitur("furniture");

const januari = (input) => {
  input = new Date(input).toLocaleDateString();
  const dateData = data.filter((a) => new Date(a.purchased_at * 1000).toLocaleDateString() === input);
  console.log({ dateData });
};
januari("2020-01-16");

const coklat = (input) => {
  const brownColor = data.filter((a) => a.tags.includes(input));
  console.log({ brownColor });
};
coklat("brown");
