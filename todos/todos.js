"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express from 'express';
//const router=express.Router();
var express_1 = require("express");
var router = (0, express_1.Router)();
var todos = [];
router.get('/', function (req, res, next) {
    res.status(200).json({ todos: todos });
});
router.post('/todo', function (req, res, next) {
    var newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.send(200).json({ todos: newTodo });
});
router.delete('/todo/:id', function (req, res, next) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === req.params.id) {
            todos.splice(i, 1);
            res.status(200).json({ message: 'Todo deleted successfully' });
            return;
        }
    }
    res.status(404).json({ message: 'Todo not found' });
});
router.put('/todo/:id', function (req, res, next) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === req.params.id) {
            todos[i].text = req.body.text;
            res.status(200).json({ message: 'Todo Changed successfully' });
            return;
        }
    }
    res.status(404).json({ message: 'Todo not found' });
});
exports.default = router;
