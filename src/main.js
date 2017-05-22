import Vue from 'vue'
import routes from './routes'

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
for (let i = 0; i < 10; i++) {
  let url = require(`./img/${i}.jpg`);
  let img = new Image();
  img.src = url;
}
