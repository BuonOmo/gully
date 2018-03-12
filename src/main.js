import Vue from 'vue'
import routes from './routes'
import ScrollPolyfill from 'smoothscroll-polyfill'

export const IMAGE_COUNT = 27

ScrollPolyfill.polyfill();

Vue.filter('two_digits', function (value) {
  return `0${value.toString()}`.slice(-2);
});

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render(h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
window.app = app;

/* Preload images */
for (let i = 0; i < IMAGE_COUNT; i++) {
  let url = require(`./img/background/2018/${i}.jpg`);
  let img = new Image();
  img.src = url;
}
