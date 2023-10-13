/* eslint-disable prettier/prettier */
"use strict";

// Import dependencies and set up http server
const express = require("express");
const { urlencoded, json } = require("body-parser");
const crypto = require("crypto");
const path = require("path");
const Receive = require("./services/receive");
const GraphApi = require("./services/graph-api");
const User = require("./services/user");
const config = require("./services/config");
const i18n = require("./i18n.config");
const app = require("./middleware.js");
const fs = require("node:fs");
const options = {
  key: fs.readFileSync("./localhost-key.pem"),
  cert: fs.readFileSync("./localhost.pem"),
};
var users = {};

// Parse application/x-www-form-urlencoded

var https = require("https");
var http = require("http");
http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443);
