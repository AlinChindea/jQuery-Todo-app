$(() => {
  //check off specific todos on click
  const $lis = $('li');
  const $span = $('span');

  $lis.on('click', function(){
    $(this).toggleClass('completed');
  });

  //click on X to delete Todo
  $span.on('click', function(e){
    $(this).parent().fadeOut(500, function(){
      $(this).remove(); //this refers here to the li
    });
    e.stopPropagation();
  });


});
