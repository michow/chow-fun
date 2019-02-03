'use strict';

/* globals jQuery */
(function ($) {
  'use strict';

  var winWidth = $(window).width(),
      breakLg = 960,
      date = new Date(),
      year = date.getFullYear();

  $('.year').html(year);

  $(window).resize(function () {
    winWidth = $(window).width();
  });

  $('.corner-curl').on('click', function () {
    $('.flip').addClass('flipped');
  });

  // mobile open preview
  $('.pricing a').on('click', function (e) {
    if (winWidth <= breakLg) {
      e.preventDefault();

      var $pricing = $(this).parent(),
          $preview = $pricing.next();

      $pricing.addClass('active');
      $preview.slideDown('fast');
    }
  });

  // mobile close preview
  $('.close').on('click', function (e) {
    e.preventDefault();

    var $preview = $(this).parent();

    $preview.prev().removeClass('active');
    $preview.slideUp('fast');
  });
})(jQuery);
//# sourceMappingURL=main.js.map
