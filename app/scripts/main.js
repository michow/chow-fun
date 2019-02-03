/* globals jQuery */
(function($) {
  'use strict';

  var
    winWidth = $( window ).width(),
    breakLg = 960,
    date = new Date(),
    year = date.getFullYear()
  ;

  $('.year').html(year);

  $( window ).resize(function() {
    winWidth = $( window ).width();
  });

  $('.corner-curl').on('click', function() {
    $('.flip').addClass('flipped');
  });

  $('.pricing').on('click', function() {
    var
      $pricing = $(this),
      $entree = $pricing.parent(),
      $preview = $entree.find('.preview'),
      $default = $('.default'),
      $previous = $('.preview:visible')
    ;

    if(winWidth > breakLg) {
      $('.pricing').removeClass('active');
      $pricing.addClass('active');

      if($('.default:visible').length) {
        $default.fadeOut('fast', function() {
          $preview.fadeIn('fast');
        });
      }

      if($previous.length) {
        $previous.fadeOut('fast', function() {
          $preview.fadeIn('fast');
        });
      }
    }
    else {
      $pricing.addClass('active');
      $preview.slideDown('fast');
    }
  });

  $('.close').on('click', function(e) {
    e.preventDefault();

    var
      $preview = $(this).parent()
    ;

    if(winWidth > breakLg) {
      $('.pricing').removeClass('active');

      $preview.fadeOut('fast', function() {
        $('.default').fadeIn('fast');
      });
    }
    else {
      $preview.prev().removeClass('active');
      $preview.slideUp('fast');
    }
  });

})(jQuery);
