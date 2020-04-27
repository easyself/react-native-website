(function() {
  document.addEventListener('DOMContentLoaded', init);

  function detectmob() {
    if (window.innerWidth <= 1024) {
      return true;
    } else {
      return false;
    }
  }

  function init() {
    var articleContainer = document.querySelector('.post article');
    if (articleContainer) {
      var el = document.createElement('div');
      el.innerHTML =
        '<a href="https://cn.bing.com" target="_blank" style="display:block;padding:12px;background-color: #eee;color:#666;"><span style="font-weight: bold;color: #05a5d1;">Bing </span> 国际版搜索。 <span style="border:solid 1px #666; padding-left:4px; padding-right: 4px;padding-top:2px;padding-bottom:2px;margin-left: 8px;vertical-align:middle;">立即查看 &gt;</span></a>';

      articleContainer.insertBefore(el, articleContainer.firstChild);
    }

    if (location.href.indexOf('/getting-started') !== -1) {
      var onPageNav = document.querySelector('nav.onPageNav');
      if (onPageNav) {
        onPageNav.remove();
      }
    }
  }
})();
