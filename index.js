/* eslint-disable prettier/prettier */
const https = require("node:https");
const express = require("express");
const fs = require("node:fs");
const { render } = require("./middleware");
const app = express();
const HOST = "https://localhost";
const options = {
  key: fs.readFileSync("./localhost-key.pem"),
  cert: fs.readFileSync("./localhost.pem"),
};

https;
https
  .createServer(options, (req, res) => {
    app.set("view engine", "ejs"),
      // Respond with index file when a GET request is made to the homepage
      app.get("/", function (_req, res) {
        res.render("index");
      });
  })
  .listen(8000);
// app.get("/callback", (req, res) => {
//Parse the query params
// let mode = req.query["hub.mode"];
// let token = req.query["hub.verify_token"];
// let challenge = req.query["hub.challenge"];

// Check if a token and mode is in the query string of the request
// if (mode && token) {
//   Check the mode and token sent is correct
// if (mode === "subscribe" && token === config.verifyToken) {
//  Respond with the challenge token from the request
// console.log("Callback_VERIFIED");
// res.status(200).send(challenge);
// } else {
//  Respond with '403 Forbidden' if verify tokens do not match
// res.sendStatus(403);
// }
// }
//  })
