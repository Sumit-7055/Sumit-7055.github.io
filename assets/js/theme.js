/* ==========================================================================
   theme.js — dark / light switch
   The theme is stored as data-theme on <html>; all colours come from
   assets/css/variables.css, so nothing else needs to know about it.
   ========================================================================== */

window.Portfolio = window.Portfolio || {};

(function (Portfolio) {
  'use strict';

  var ICON = { dark: '\u2600', light: '\u263E' }; /* ☀ / ☾ */
  var DEFAULT_THEME = 'dark';

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
  }

  function applyTheme(theme, button) {
    document.documentElement.setAttribute('data-theme', theme);
    if (button) {
      button.textContent = ICON[theme];
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  Portfolio.initTheme = function () {
    var button = Portfolio.select('[data-theme-toggle]');
    applyTheme(currentTheme(), button);

    if (!button) return;
    button.addEventListener('click', function () {
      applyTheme(currentTheme() === 'dark' ? 'light' : 'dark', button);
    });
  };
})(window.Portfolio);
