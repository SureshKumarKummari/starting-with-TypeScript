"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TS will support this
//const express=require('express');
var express = require("express");
var body_parser = require("body-parser");
var todos_1 = require("./todos/todos");
var app = express();
app.use(body_parser.json());
app.use(todos_1.default);
app.listen({ port: 3000 });
