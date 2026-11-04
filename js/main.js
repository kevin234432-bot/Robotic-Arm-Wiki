(() => {
  const items = Array.isArray(window.ARM_ARTICLES) ? window.ARM_ARTICLES : [];
  const container = document.querySelector('#article-grid');
  const search = document.querySelector('#search');
  const tabs = document.querySelectorAll('[data-category]');
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  if (!container || !search || !count || !empty) return;
  let selected = '全部';
  function render() {
    const query = search.value.trim().toLocaleLowerCase();
    const results = items.filter(a => (selected === '全部' || a.category === selected) &&
      [a.title, a.desc, a.keywords, a.category].some(v => String(v || '').toLocaleLowerCase().includes(query)));
    container.replaceChildren();
    for (const a of results) {
      const link = document.createElement('a');
      link.className = 'article-card';
      link.href = 'pages/' + encodeURIComponent(a.slug) + '.html';
      const meta = document.createElement('span');
      meta.className = 'card-meta';
      meta.textContent = a.category + ' · ' + a.level;
      const h = document.createElement('h3');
      h.textContent = a.title;
      const p = document.createElement('p');
      p.textContent = a.desc;
      const more = document.createElement('span');
      more.className = 'card-more';
      more.textContent = '閱讀文章 →';
      link.append(meta, h, p, more);
      container.append(link);
    }
    count.textContent = '找到 ' + results.length + ' 篇文章';
    empty.hidden = results.length !== 0;
  }
  search.addEventListener('input', render);
  tabs.forEach(tab => tab.addEventListener('click', () => {
    selected = tab.dataset.category;
    tabs.forEach(t => { t.classList.toggle('active', t === tab); t.setAttribute('aria-pressed', String(t === tab)); });
    render();
  }));
  render();
})();
