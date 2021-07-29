const ul = document.querySelector('.list');
var input = document.querySelector('input')
$.when(
    $.getJSON( "api/todo" ),
    $.ready
  ).done(function( data ) {
    createlis(data[0]);
  });
  input.addEventListener('keypress',(e)=>{  
   if(e.which===13&&input.value!==""){
      $.post('api/todo',{name:input.value})
      .done((data)=>{
        createli(data);
      })
      .fail((err)=>{
        alert('task failed')
      })
    input.value = "";
   }
  })
  function createli(todo){
    var li = $('<li>'+todo.name+'<button>x</button></li>')
    li.data('id',todo._id);
    li.data('completed',todo.completed);
    if(todo.completed){
      li.addClass('done');
    }
    $('ul').append(li);
  }
  function createlis(todos){
    for(todo of todos){
     createli(todo);
    }
   }
   
   $('.list').on('click','button',function(e){
     e.stopPropagation();
    var li = $(this).parent();
    deleteTodo(li);
    })

    $('.list').on('click','li',function(){
      var isDone = !$(this).data('completed');
      var id = $(this).data('id');
      var toUpdate = {completed:isDone}
      if(isDone){
        $.ajax({
          type:"PUT",
          url:`/api/todo/${id}`,
          data : toUpdate
        })
        .then((data)=>{
          $(this).addClass('done');
          $(this).data('completed',data.completed)
        })
      }else{
        $.ajax({
          type:"PUT",
          url:`/api/todo/${id}`,
          data : toUpdate
        })
        .then((data)=>{
          $(this).removeClass('done');
          $(this).data('completed',data.completed)
        })
      }
      
    })

    function deleteTodo(li){
      var id = li.data('id');
    $.ajax({
      type: "DELETE",
      url: `/api/todo/${id}`
    })
    .then((data)=>{
      li.remove();
    })
    }

    
  