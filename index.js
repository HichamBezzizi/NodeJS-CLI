#!/usr/bin/env node

//console.log("Hello, Node.JS!");

const verifyEmail = require("email-validator");
const getRequest = require("axios");
const readLine = require("readline-sync");

const myEmail = readLine.question("What is your email? " )

if(verifyEmail.validate(myEmail) == true) {

    const encodedEmail = encodeURIComponent(myEmail)

    getRequest.get("https://haveibeenpwned.com/api/v2/breachedaccount/"+encodedEmail,{"headers" : {"user-agent": "Node_CLI tool"}})
    .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
