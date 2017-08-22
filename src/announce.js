var announce_timeout;

function announce(message, manner) {
  var announcer, clear_announcer;
   manner = manner || 'polite';
   announcer = document.getElementById('a11y-toolkit-announcer');

   if (announcer === null) {
     console.warn('Page does not implement an element with id `a11y-toolkit-announcer`. This message will not be announced.');
     return
   }

   announcer.setAttribute('aria-live', 'off');
   clear_announcer = function() {
     announcer.innerHTML = '';
     announce_timeout = null;
   };
   set_announcer = function() {
     announcer.innerHTML = message
     announcer.setAttribute('aria-live', manner);
   }
   clearTimeout(announce_timeout);
   announce_timeout = setTimeout(set_announcer, 50);
   announce_timeout = setTimeout(clear_announcer, 500);
}

module.exports = {
  announce: announce
};
