const express = require('express');
const helper = require('../helpers/todo.js')
const router = express.Router();


router.get('/',helper.getTodos)

router.post('/',helper.createTodo)

router.get('/:todoId',helper.getTodo);

router.put('/:todoId',helper.updateTodo)

router.delete('/:todoId',helper.deleteTodo)
module.exports = router;