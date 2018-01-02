$(function() {
  $('#name').keyup(function() {
    $('#search').text($('#name').val());
  })
})