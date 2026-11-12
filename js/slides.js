/* 第十週教學簡報：不依賴框架，不影響原有 Wiki 搜尋。 */
(() => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const previous = document.getElementById('prev-slide');
  const next = document.getElementById('next-slide');
  const counter = document.getElementById('slide-counter');
  const progress = document.getElementById('slide-progress');
  const fill = document.getElementById('progress-fill');
  const label = document.getElementById('slide-name');
  if (!slides.length || !previous || !next) return;
  let current = 0;
  function show(index) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
    });
    counter.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    progress.setAttribute('aria-valuenow', String(current + 1));
    fill.style.width = ((current + 1) / slides.length * 100) + '%';
    label.textContent = slides[current].dataset.title || '';
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    const url = new URL(window.location.href);
    url.hash = 'slide-' + (current + 1);
    history.replaceState(null, '', url);
  }
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
    if (event.key === 'ArrowRight' || event.key === 'PageDown') { event.preventDefault(); show(current + 1); }
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); show(current - 1); }
    if (event.key === 'Home') { event.preventDefault(); show(0); }
    if (event.key === 'End') { event.preventDefault(); show(slides.length - 1); }
  });
  const match = location.hash.match(/^#slide-(\d+)$/);
  show(match ? Number(match[1]) - 1 : 0);
})();
