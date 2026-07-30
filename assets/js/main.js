/* ==========================================================================
   main.js — single entry point. Boots each feature in the same order the
   original page did: theme first, then reveal animations, then the form.
   ========================================================================== */

(function (Portfolio) {
  'use strict';

  function boot() {
    Portfolio.initTheme();
    Portfolio.initScrollReveal();
    Portfolio.initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(window.Portfolio);
