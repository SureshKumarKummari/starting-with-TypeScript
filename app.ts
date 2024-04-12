//TS will support this
//const express=require('express');
import express=require('express');
import body_parser=require('body-parser');

import todosRoutes from './todos/todos'

const app=express();

app.use(body_parser.json())
app.use(todosRoutes);

app.listen({port:3000});