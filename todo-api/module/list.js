const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    name :{
        type:String,
        require:[true,'task name is required']
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdon:{
        type:Date,
        default:Date.now()
    }
});
const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;