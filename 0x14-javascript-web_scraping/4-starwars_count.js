#!/usr/bin/node
const request = require('request');
const options = {
  url: `${process.argv[2]}`,
  json: true
};
request(options, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  let count = 0;
  body.results.forEach((curr) => {
    curr.characters.forEach((mem) => {
      const id = parseInt(mem.match(/\d+/)[0]);
      if (id === 18) {
        count++;
      }
    });
  });
  console.log(count);
});
