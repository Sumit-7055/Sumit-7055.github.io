/* ==========================================================================
   utils.js — tiny shared helpers. No dependencies, no framework.
   Exposed on window.Portfolio so every file can use them without ES modules
   (that keeps index.html working when opened directly from the file system).
   ========================================================================== */

window.Portfolio = window.Portfolio || {};

(function (Portfolio) {
  'use strict';

  /** Query a single element. */
  Portfolio.select = function (selector, scope) {
    return (scope || document).querySelector(selector);
  };

  /** Query many elements, always as a real array. */
  Portfolio.selectAll = function (selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  };

  /** True when the visitor asked the OS to reduce motion. */
  Portfolio.prefersReducedMotion = function () {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };
})(window.Portfolio);
