import componentA from './components/a.js';
import componentB from './components/b.js';
import componentC from './components/c.js';

function render(html) {
  document.getElementById('main').innerHTML = html;
}

const routes = {
  '#/A': componentA,
  '#/B': componentB,
  '#/C': componentC,
};

window.push = function(uri) {
  const state = routes[Object.keys(routes).find(r => r === uri) || '#/A']();
  window.history.pushState(state, '', '/');
  // ルートに登録されていない場合はcomponentAを表示させる
  render(state);
}

window.onpopstate = function (e) {
  render(e.currentTarget.history.state || routes['#/A']());
}

render(routes['#/A']());
