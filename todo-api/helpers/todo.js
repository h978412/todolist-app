const {Todo} = require('../module');
const all = {};
all.getTodos = (req,res)=>{
    
    Todo.find({})
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.send(err);
    })
  }

all.createTodo = (req,res)=>{
    Todo.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.send(err);
    })
    
}

all.getTodo = (req,res)=>{
    Todo.findById(req.params.todoId)
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.send(err);
    })
 }

 all.updateTodo = (req,res)=>{
     console.log(req.body);
    Todo.findByIdAndUpdate(req.params.todoId,req.body,{new:true})
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.send(err);
    })
}

all.deleteTodo = (req,res)=>{
    
    Todo.findByIdAndDelete(req.params.todoId)
    
    .then((data)=>{
        res.json({message:"succesfully deleted"});
    })
    .catch((err)=>{
        res.send(err);
    })
}

module.exports = all;