#!/usr/bin/node
const request = require('request');
request(process.argv[2], (error, response) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('code:', response.statusCode);
});
