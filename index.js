#!/usr/bin/env node

//console.log("Hello, Node.JS!");

const verifyEmail = require("email-validator"); // various packages.
const getRequest = require("axios");            //
const readLine = require("readline-sync");      //
const chalk = require("chalk");                 //

const validity = chalk.black.bgGreen.underline  // some styles for my confirmation messages.
const errorMessage = chalk.black.bgRed.underline; //

const inputEmail = readLine.question("Please enter your email here: " ) //makes sure this string is displayed in the terminal whenever you run your CLI tool.

if(verifyEmail.validate(inputEmail)) {

    const encodedEmail = encodeURIComponent(inputEmail)  //encodeURIComponent encodes the special characters in myEmail which in this case is the @ character. So instead of hicham_bezzizi@hotmail.com, it encodes as hicham_bezzizi%40hotmail.com.
    const url = "https://haveibeenpwned.com/api/v2/breachedaccount/"+encodedEmail; //contains the url to the api + your encoded email.


    getRequest.get(url,{"headers" : {"user-agent": "Node_CLI tool"}})
    .then(function (response) {
    //console.log(response.data);
    console.log(errorMessage("This email has been breached!"))
  })
  .catch(function (error) {
    //console.log(error);
    console.log(validity("This email has not been breached!"))
  });
}
else(console.log(errorMessage("Please enter a valid email.")))
