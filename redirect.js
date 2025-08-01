// Принудительное обновление кеша
if (typeof window !== 'undefined' && window.location) {
  // Добавляем случайный параметр к URL для обхода кеша
  const url = new URL(window.location.href);
  url.searchParams.set('_t', Date.now());
  if (window.history && window.history.replaceState) {
    window.history.replaceState({}, '', url.toString());
  }
}

const REDIRECTS = {
  zoom: 'https://us05web.zoom.us/j/81116686762?pwd=yvd6q03psRhRSFELyllk9WSEZ52tpI.1',
  meet: 'https://meet.google.com/zbq-gnwd-ksh',
  telemost: 'https://telemost.yandex.ru/j/3170511128',
  зум: 'https://us05web.zoom.us/j/81116686762?pwd=yvd6q03psRhRSFELyllk9WSEZ52tpI.1',
  мит: 'https://meet.google.com/zbq-gnwd-ksh',
  телемост: 'https://telemost.yandex.ru/j/3170511128',
  dev: 'https://us06web.zoom.us/j/74430241516?pwd=Crm6VuYH8OmHhCC5xNuCGjxXOX5ScX.1',
};

function getPath() {
  const path = window.location.pathname;
  // Убираем начальный и конечный слеш
  return path.replace(/^\/|\/$/g, '');
}

function redirect() {
  const path = getPath();
  if (path && REDIRECTS[path]) {
    window.location.href = REDIRECTS[path];
  } else {
    window.location.href = 'https://github.com/gyach';
  }
}

// Запускаем редирект при загрузке страницы
window.onload = redirect;
