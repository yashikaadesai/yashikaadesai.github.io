(function() {
  var SOURCES = window.TEXT_VARIABLES.sources;

  window.Lazyload.js(SOURCES.jquery, function() {
    var $pageMask = $('.js-page-mask');
    var $pageRoot = $('.js-page-root');
    var $pageMain = $('.js-page-main');
    var $sidebarShow = $('.js-sidebar-show');
    var $sidebarHide = $('.js-sidebar-hide');

    var scrollTop;

    function freeze(e) {
      if (e.target === $pageMask[0]) {
        e.preventDefault();
      }
    }
    function stopBodyScrolling(bool) {
      if (bool === true) {
        document.addEventListener('touchmove', freeze, { passive: false });
      } else {
        document.removeEventListener('touchmove', freeze, { passive: false });
      }
    }

    $sidebarShow.on('click', function() {
      scrollTop = $(window).scrollTop();
      stopBodyScrolling(true); $pageRoot.addClass('show-sidebar'); $pageMain.scrollTop(scrollTop);
    });
    $sidebarHide.on('click', function() {
      stopBodyScrolling(false); $pageRoot.removeClass('show-sidebar'); $(window).scrollTop(scrollTop);
    });
  });
})();