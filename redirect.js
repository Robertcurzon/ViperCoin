(() => {
  const base = new URL('https://robertcurzon.github.io/V1perCoin/');
  const prefix = '/ViperCoin';
  const path = window.location.pathname;
  const suffix = path === prefix ? '' : path.startsWith(prefix + '/') ? path.slice(prefix.length + 1) : '';
  base.pathname += suffix;
  base.search = window.location.search;
  base.hash = window.location.hash;
  window.location.replace(base.href);
})();