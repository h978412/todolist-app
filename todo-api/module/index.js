const mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost:27017/todo');
mongoose.Promise = Promise;

module.exports.Todo = require('./list.js')