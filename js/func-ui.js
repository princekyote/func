$('.dropdown-el').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
});
$(document).click(function() {
  $('.dropdown-el').removeClass('expanded');
});

$('.func-stage-flip').click(function(e) {
  $('.func-stage').toggleClass('flip');
});

$('.func-stage-back').click(function(e) {
  $('.func-stage').toggleClass('flip');
});
