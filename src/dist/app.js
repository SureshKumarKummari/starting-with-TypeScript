"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//TS will support this
//const express=require('express');
const express = require("express");
const body_parser = require("body-parser");
const todos_1 = __importDefault(require("./todos/todos"));
const app = express();
app.use(body_parser.json());
app.use(todos_1.default);
app.listen({ port: 3000 });
