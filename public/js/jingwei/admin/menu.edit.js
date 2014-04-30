$(document).ready(function() {

  function statistic() {
    var counter = $('.dev-menu-count').val().length;
    $('.dev-menu-counter').text(counter);
  }
  // menu name word count
  statistic();
  $('.dev-menu-count').keyup(function() {
    statistic();
  });
});
