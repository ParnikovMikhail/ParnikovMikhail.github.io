(function($) {
  $.fn.showMoreItems = function(options) {

    var $totalItems = $('.item-list li').length,
        $visibleItems = $('.item-list li:visible').length,
        settings = $.extend({}, $.fn.showMoreItems.defaults, options),
        i = settings.count,
        countLess = settings.count - 1;

    $('.item-list li:lt(' + settings.count + ')').css('display', 'flex');

    $('.more-trigger').click(function(el) {
      el.preventDefault();

      if ($visibleItems !== $totalItems) {
        if(i + settings.count <= $totalItems) {
          $visibleItems = i += settings.count;
          $('.item-list li:lt('+ i +')').show().css('display', 'flex');

          if(i == $totalItems) {
            $('.more-trigger').text("Смотреть меньше");
          }

        } else if (i !== $totalItems) {
          $('.item-list li:gt(' + countLess + ')').show().css('display', 'flex');
          $('.more-trigger').text("Смотреть меньше");
          $visibleItems = $totalItems;
          i = $totalItems;
        }
      } else if($visibleItems === $totalItems) {
        $('.item-list li:gt(' + countLess + ')').hide();
        $('.more-trigger').text("Смотреть больше");
        $visibleItems = settings.count;
        i = settings.count;
      }

    });
  }

  $.fn.showMoreItems.defaults = {
    count: 6
  };
})(jQuery);

(function($) {
  $.fn.showMoreList = function(options) {

    var $totalItems = $('.catalogs-list a:nth-child(1n + 2) li').length,
        $visibleItems = $('.catalogs-list a:nth-child(1n + 2) li:visible').length,
        settings = $.extend({}, $.fn.showMoreItems.defaults, options),
        i = settings.count,
        countLess = settings.count - 1;

    $('.catalogs-list a:nth-child(1n + 2) li:lt(' + settings.count + ')').css('display', 'flex');

    $('.more-trigger2').click(function(el) {
      el.preventDefault();

      if ($visibleItems !== $totalItems) {
        if(i + settings.count <= $totalItems) {
          $visibleItems = i += settings.count;
          $('.catalogs-list a:nth-child(1n + 2) li:lt('+ i +')').show().css('display', 'flex');

          if(i == $totalItems) {
            $('.more-trigger2').text("Смотреть меньше");
          }

        } else if (i !== $totalItems) {
          $('.catalogs-list a:nth-child(1n + 2) li:gt(' + countLess + ')').show().css('display', 'flex');
          $('.more-trigger2').text("Смотреть меньше");
          $visibleItems = $totalItems;
          i = $totalItems;
        }
      } else if($visibleItems === $totalItems) {
        $('.catalogs-list a:nth-child(1n + 2) li:gt(' + countLess + ')').hide();
        $('.more-trigger2').text("Смотреть больше");
        $visibleItems = settings.count;
        i = settings.count;
      }

    });
  }

  $.fn.showMoreItems.defaults = {
    count: 6
  };
})(jQuery);

(function($) {
  $.fn.showMoreList2 = function(options) {

    var $totalItems = $('.catalogs-list img').length,
        $visibleItems = $('.catalogs-list img:visible').length,
        settings = $.extend({}, $.fn.showMoreItems.defaults, options),
        i = settings.count,
        countLess = settings.count - 1;

    $('.catalogs-list img:lt(' + settings.count + ')').css('display', 'block');

    $('.more-trigger2').click(function(el) {
      el.preventDefault();

      if ($visibleItems !== $totalItems) {
        if(i + settings.count <= $totalItems) {
          $visibleItems = i += settings.count;
          $('.catalogs-list img:lt('+ i +')').show().css('display', 'block');

          if(i == $totalItems) {
            $('.more-trigger2').text("Смотреть меньше");
          }

        } else if (i !== $totalItems) {
          $('.catalogs-list img:gt(' + countLess + ')').show().css('display', 'block');
          $('.more-trigger2').text("Смотреть меньше");
          $visibleItems = $totalItems;
          i = $totalItems;
        }
      } else if($visibleItems === $totalItems) {
        $('.catalogs-list img:gt(' + countLess + ')').hide();
        $('.more-trigger2').text("Смотреть больше");
        $visibleItems = settings.count;
        i = settings.count;
      }

    });
  }

  $.fn.showMoreItems.defaults = {
    count: 6
  };
})(jQuery);

