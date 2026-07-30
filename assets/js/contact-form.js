/* ==========================================================================
   contact-form.js — opens the visitor's mail client with a pre-filled message
   There is no backend: the form composes a mailto: link. To swap in a form
   service later, replace the body of handleSubmit and leave the markup alone.
   ========================================================================== */

window.Portfolio = window.Portfolio || {};

(function (Portfolio) {
  'use strict';

  var RECIPIENT = 'sumit5507kr@gmail.com';
  var LABEL_IDLE = 'Send message \u2192';
  var LABEL_SENDING = 'Opening your mail app\u2026';
  var LABEL_RESET_MS = 4000;

  function buildMailto(name, email, message) {
    var subject = encodeURIComponent('Portfolio enquiry from ' + name);
    var body = 'Hi Sumit,%0D%0A%0D%0A' +
      encodeURIComponent(message) +
      '%0D%0A%0D%0A\u2014 ' + encodeURIComponent(name) + ' (' + email + ')';
    return 'mailto:' + RECIPIENT + '?subject=' + subject + '&body=' + body;
  }

  Portfolio.initContactForm = function () {
    var form = Portfolio.select('[data-contact-form]');
    if (!form) return;

    var submitButton = Portfolio.select('[data-submit-button]', form);

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = form.elements.name.value || '';
      var email = form.elements.email.value || '';
      var message = form.elements.message.value || '';

      window.location.href = buildMailto(name, email, message);

      if (!submitButton) return;
      submitButton.textContent = LABEL_SENDING;
      window.setTimeout(function () {
        submitButton.textContent = LABEL_IDLE;
      }, LABEL_RESET_MS);
    });
  };
})(window.Portfolio);
