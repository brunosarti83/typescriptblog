"use strict";
const express = require('express');
const app = express();
app.use(express.json()); // middleware to parse req.body
