#!/usr/bin/env node

//console.log("Hello, Node.JS!");

const verifyEmail = require("email-validator"); // various packages.
const getRequest = require("axios");            //
const readLine = require("readline-sync");      // 

const myEmail = readLine.question("What is your email? " ) //makes sure this string is displayed in the terminal whenever you run your CLI tool.

if(verifyEmail.validate(myEmail) == true) {

    const encodedEmail = encodeURIComponent(myEmail)  //encodeURIComponent encodes the special characters in myEmail which in this case is the @ character.
                                                     //so instead of hicham_bezzizi@hotmail.com, it encodes as hicham_bezzizi%40hotmail.com.

    getRequest.get("https://haveibeenpwned.com/api/v2/breachedaccount/"+encodedEmail,{"headers" : {"user-agent": "Node_CLI tool"}})
    .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
