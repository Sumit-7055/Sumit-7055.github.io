/* ==========================================================================
   animations.js — scroll reveal
   Any element marked data-reveal fades and slides up once when it first
   enters the viewport. The hidden state is added here (not in the stylesheet)
   so content stays visible if JavaScript is unavailable.
   ========================================================================== */

window.Portfolio = window.Portfolio || {};

(function (Portfolio) {
  'use strict';

  var OBSERVER_OPTIONS = { threshold: 0.12, rootMargin: '0px 0px -8% 0px' };

  Portfolio.initScrollReveal = function () {
    var targets = Portfolio.selectAll('[data-reveal]');
    if (!targets.length) return;

    /* No IntersectionObserver support: leave everything visible. */
    if (!('IntersectionObserver' in window)) return;

    targets.forEach(function (el) {
      el.classList.add('reveal-ready');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, OBSERVER_OPTIONS);

    targets.forEach(function (el) {
      observer.observe(el);
    });
  };
})(window.Portfolio);
