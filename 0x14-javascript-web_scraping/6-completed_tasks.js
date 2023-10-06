#!/usr/bin/node
const request = require('request');
const options = {
  url: process.argv[2], json: true
};
request(options, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const end = {};
  body.forEach((curr) => {
    if (curr.completed === true) {
      if (curr.userId in end) {
        end[curr.userId]++;
      } else {
        end[curr.userId] = 1;
      }
    }
  });
  console.log(end);
});
