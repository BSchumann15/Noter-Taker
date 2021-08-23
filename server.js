const express = require('express');
const fs = require('fs');
const path = require('path');

let app = express();
let PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

let notes = require("./db/db.json")

