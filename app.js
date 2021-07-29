const express  = require('express');
const router = require('./todo-api/routes');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

app.use('/api/todo',router);
app.get('/',(req,res)=>{
    res.sendFile('index.html');
})

app.listen(3000,()=>{
    console.log('local server created');
})