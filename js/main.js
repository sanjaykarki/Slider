$(document).ready(function() {

  // Set Options
  var speed = 500; // fade animation speed
  var autoSlide = true; // auto slider option
  var autoSlide_speed = 4000; // auto slider speed

  // Add active class to first slide
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  //Show first slide
  $('.active').show();

  // Next slide handler
  $('#next').on('click', nextSlide);

  // Previous slide handler
  $('#prev').on('click', prevSlide);

  // Auto slide handler
  if (autoSlide == true) {
    setInterval(nextSlide, autoSlide_speed);
  };

  // Show next slider
  function nextSlide() {
    $('.active').removeClass('active').addClass('deactive');
    if ($('.deactive').is(':last-child')) {
      $('.slide').first().addClass('active');
    } else {
      $('.deactive').next().addClass('active');
    };
    $('.deactive').removeClass('deactive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  };

  // Show previous slider
  function prevSlide() {
    $('.active').removeClass('active').addClass('deactive');
    if ($('.deactive').is(':first-child')) {
      $('.slide').last().addClass('active');
    } else {
      $('.deactive').prev().addClass('active');
    };
    $('.deactive').removeClass('deactive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

});
