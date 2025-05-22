const REDIRECTS = {
  zoom: 'https://us05web.zoom.us/j/81116686762?pwd=yvd6q03psRhRSFELyllk9WSEZ52tpI.1',
  meet: 'https://meet.google.com/zbq-gnwd-ksh',
  telemost: 'https://telemost.yandex.ru/j/3170511128',
  зум: 'https://us05web.zoom.us/j/81116686762?pwd=yvd6q03psRhRSFELyllk9WSEZ52tpI.1',
  мит: 'https://meet.google.com/zbq-gnwd-ksh',
  телемост: 'https://telemost.yandex.ru/j/3170511128',
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
