$('body') //selecting body
    .append(
        $('<h1>').text('TodoList')
        .addClass('heading')
    )
    .append(
        $('<div>')
        .addClass('inputDetails')
        .append(
            $('<input>')
                .attr('placeholder', 'Enter new task')
                .attr('type','text')
                .addClass('newTask')
        )
        .append(
            $('<button>')
                .text('Add Task')
                .addClass('btn')
                 .click(ev=>{
                    console.log($('.newTask').val());
                    $('.taskList')
                        .append(
                            $('<li>')
                            .text($('.newTask').val())
                            .addClass('task')
                             .append(
                            $('<div>')
                            .addClass('btnGroup')
                            .append(
                                $('<button>').text('👆')
                                .addClass('upBtn')
                            )
                            .append(
                                $('<button>').text('👇')
                                .addClass('downBtn')
                            )
                            .append(
                                $('<button>').text('❌')
                                .addClass('deleteBtn')
                            )
                            
                            )
                        )
                    $('.newTask').val(" ") 
                })
        ) 
    )
    .append(
            $('<ul>')
            .addClass('taskList')
            .click(ev=>{
                console.log($(ev.target));
                if($(ev.target).hasClass('upBtn')){
                    $(ev.target).parent().parent()
                        .insertBefore($(ev.target).parent().parent().prev())
                }
                else if($(ev.target).hasClass('downBtn')){
                    $(ev.target).parent().parent()
                        .insertAfter($(ev.target).parent().parent().next())
                }
                else if($(ev.target).hasClass('deleteBtn')){
                    $(ev.target).parent().parent().remove()
                }
                
            })
               
        )
  
