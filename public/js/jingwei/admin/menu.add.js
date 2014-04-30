$(document).ready(function() {
  // menu name word count
  $('.dev-menu-count').keyup(function() {
    var counter = $('.dev-menu-count').val().length;
    $('.dev-menu-counter').text(counter);
  });
});

