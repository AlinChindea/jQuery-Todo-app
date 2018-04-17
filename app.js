$(() => {
  //check off specific todos on click
  const $lis = $('li');

  $lis.on('click', function(){
    $(this).toggleClass('completed');
  });


});
