/* Sakura Sands — language switcher (JP / EN) */
(function () {
  var KEY = 'ss_lang';

  function apply(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-current', active ? 'true' : 'false');
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = 'jp';
    try { saved = localStorage.getItem(KEY) || 'jp'; } catch (e) {}
    apply(saved);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { apply(this.dataset.lang); });
    });
  });
}());
