$(() => {
  //check off specific todos on click
  const $ul= $('ul');
  const $userInput = $('input[type="text"]');

  $ul.on('click', 'li', function(){
    $(this).toggleClass('completed');
  });

  //click to delete Todo
  $ul.on('click', 'span', function(e){
    $(this).parent().fadeOut(500, function(){
      $(this).remove(); //this refers here to the li
    });
    e.stopPropagation();
  });

  $userInput.on('keypress', function(e){
    if(e.which === 13){
      //grabbing new todo text from user input
      const $newTodo = $(this).val();
      $(this).val('');
      //create a new li and add add to ul
      $ul.append(`<li><span>X</span> ${$newTodo}</li>`);
    }

  });




});
