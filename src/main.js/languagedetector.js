// Funktion zur Erkennung der Sprache und Setzen von 'dir'
function setLanguageDirection() {
  const userLang = navigator.language || navigator.userLanguage; 
  const lang = userLang.split('-')[0];

  if (lang === 'ar' || lang === 'he' || lang === 'fa') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', lang); // Sprache setzen
      // Sidebar von rechts (offcanvas-end)
      document.querySelector('.offcanvas').classList.remove('offcanvas-start');
      document.querySelector('.offcanvas').classList.add('offcanvas-end');
  } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'de'); // Standard auf Deutsch setzen
      // Sidebar von links (offcanvas-start)
      document.querySelector('.offcanvas').classList.remove('offcanvas-end');
      document.querySelector('.offcanvas').classList.add('offcanvas-start');
  }
};




