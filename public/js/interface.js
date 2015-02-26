// $(document).ready(function() {

//   var text = 'Thank you for downloading the "Sinatra_Template" Gem, As you may have noticed CSS, Normalize and Jquery have all been required so that you are ready to go build this page quickly and easily. Simply start editing from "index.erb" and the related files. *** Remember to remove the ".git" file and update the "readme.md" if you are going to create your own repository from this template.***\n\nENJOY! :-)';
//             $('button').click(function(){
//                 var span = $('<span/>').insertAfter(this);
//                 $(this).remove();
//                 jQuery({count:0}).animate({count:text.length}, {
//                     duration: 30000,
//                     step: function() {
//                         span.text( text.substring(0, Math.round(this.count)) );
//                     },
//                 });
//             });

// });

$(function(){

  $(':text').focus();

  $(':text').on('keypress', function(e){
    if (e.which == 13){
      $('#add_to_do').click();
    }
  });

  $('#add_to_do').on('click', function(e){
    if( $('#to_do_item').val() == '' ) {
      $(':text').focus();
      return
    }
    var item = "<li><p>"+$('#to_do_item').val()+" </p><a class='done' href='\#'>Done?</a></li>"
    $('#to_do_list').append(item);
    $('#to_do_item').val('')
    $(':text').focus();


  });

  $('#to_do_list').on('click', '.done', function(e){
    completed_item = "<li>"+($(this).prev().text())+"</li>"
    $(this).parent().fadeOut(500);
    $(completed_item).appendTo('#finished_list').hide().delay(500).fadeIn(500);
  });

  $('#remove_all').on('click', function(e){
    $('li').remove();
    $(':text').focus();
  });

});