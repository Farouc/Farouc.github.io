(() => {
  const root = document.documentElement;
  let saved;
  try {
    saved = localStorage.getItem('theme');
  } catch {
    // Browsers can block storage when opening local files or browsing privately.
  }
  root.dataset.theme = saved === 'light' || saved === 'dark'
    ? saved
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    const updateLabel = () => {
      const label = `Switch to ${root.dataset.theme === 'dark' ? 'light' : 'dark'} mode`;
      button.setAttribute('aria-label', label);
      button.title = label;
    };
    updateLabel();
    button.hidden = false;
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      updateLabel();
      try {
        localStorage.setItem('theme', root.dataset.theme);
      } catch {
        // Switching still works when the browser cannot save the preference.
      }
    });
  });
})();
