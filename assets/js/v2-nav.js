/* EBB Systems — V2 interior nav: mobile menu toggle */
(function () {
  'use strict';
  var burger = document.querySelector('.v2-nav__burger');
  var menu = document.querySelector('.v2-nav__mobile');
  if (!burger || !menu) return;
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();
