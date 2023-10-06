#!/usr/bin/node
const request = require('request');
const options = {
  url: `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`,
  json: true
};
request(options, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  body.characters.forEach((curr) => {
    const op = { url: curr, json: true };
    request(op, (error, response, body) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(body.name);
    });
  });
});
