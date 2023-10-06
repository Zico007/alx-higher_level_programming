#!/usr/bin/node
const util = require('util');
const request = require('request');
const options = {
  url: `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`,
  json: true
};
request(options, async (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  let sortList = [];
  body.characters.forEach((curr) => {
    const id = parseInt(curr.match(/\d+/)[0]);
    const new_ = { id: id, url: curr };
    sortList.push(new_);
  });
  sortList = sortList.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  const promises = sortList.map((curr) => {
    const op = { url: curr.url, json: true };
    return util.promisify(request)(op);
  });
  const responses = await Promise.all(promises);
  for (let i = 0; i < responses.length; i++) {
    console.log(responses[i].body.name);
  }
});
