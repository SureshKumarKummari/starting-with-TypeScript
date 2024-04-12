//import express from 'express';
//const router=express.Router();
import {Router} from 'express';

import {Todo} from '../models/todos'
const router=Router();

const todos:Todo[]=[];
router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos});
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text,
    }
    todos.push(newTodo);
    res.send(200).json({todos:newTodo});
})

router.delete('/todo/:id', (req, res, next) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === req.params.id) {
            todos.splice(i, 1);
            res.status(200).json({ message: 'Todo deleted successfully' });
            return;
        }
    }
    res.status(404).json({ message: 'Todo not found' });
});


router.put('/todo/:id', (req, res, next) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === req.params.id) {
            todos[i].text=req.body.text;
            res.status(200).json({ message: 'Todo Changed successfully' });
            return;
        }
    }
    res.status(404).json({ message: 'Todo not found' });
});


export default router;
