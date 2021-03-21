$(document).ready(function(){
  $('.slider').slick();
});

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
  $('.func-stage').removeClass('flip');
});

$('.func-stage-open-selector').click(function(e) {
  $('.logged-in').toggleClass('select-nft');
});

$('.nft-selector-close').click(function(e) {
  $('.logged-in').toggleClass('select-nft');
});

$('.func-action-do').click(function(e) {
  $('.logged-in').toggleClass('inspect');
});

$('.nft-inspector-close').click(function(e) {
  $('.logged-in').toggleClass('inspect');
});

$('.nft').click(function(e) {
  $('.logged-in').toggleClass('select-nft');
  $('.logged-in').toggleClass('nft-selected');
});

$('.btn-eject').click(function(e) {
  $('.logged-in').toggleClass('nft-selected');
  $('.func-stage').removeClass('flip');
  e.stopPropagation();
});

$('.func-action-slider').slick();



function hoverImage(e) {

  const inMaxX = e.target.width;
  const inMaxY = e.target.height;

  const xMapped = (map(e.offsetX, 0, inMaxX, -1, 1));
  const yMapped = (map(e.offsetY, 0, inMaxY, 1, -1));

  e.target.style.transform = "rotate3d("+yMapped+","+xMapped+",0,10deg)";
}

function leaveImage(e) {
    e.target.style.transform = "rotate3d(0,0,0,10deg)";
    console.log("out");
}

// Mapping function
function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

document.querySelector('.inspector-image').addEventListener('mousemove', hoverImage);
document.querySelector('.inspector-image').addEventListener('mouseleave', leaveImage);
