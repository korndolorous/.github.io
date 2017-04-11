
$(document).ready(function(){

});

$(function(){

  // ATTR METHOD
  //$('p:first').attr('class', 'not-lead');

  // IMAGE SWAP
  //$('img').attr('src', 'img2.jpg');
  // $('img').delay(400).fadeOut(500, function(){
  //   $(this).attr('src', 'img2.jpg').fadeIn(500);
  // });

  // CLASS METHODS
  //$('p').toggleClass('blue').removeClass('lead');

  // CONTENT METHODS
  //$('p:first').html('<a href="google.com">link</a>');
  // $('input').val('yo dude!');
  $( "#btn" ).click(function() {
  // alert( "Handler for .click() called." );
  var gend = $("#gender").val()
  if (gend == "male") {
    $('section').parents().css( "background-color", "red" )  
  }
  else if (gend == "female") {
    $('section').parents().css( "background-color", "pink" )  
  }
  });
});