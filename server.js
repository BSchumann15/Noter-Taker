const express = require('express');
const fs = require('fs');
const path = require('path');

let app = express();
let PORT = process.env.PORT || 3001;