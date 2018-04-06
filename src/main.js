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

/* Preload images when dom is ready */
function preloadImages() {
	const current = +sessionStorage.getItem('GULLY_background') || IMAGE_COUNT - 1
	for (let i = 0; i < IMAGE_COUNT; i++) {
		let url = require(`./img/background/2018/bg-${i}.jpg`);
		let img = new Image();
		img.decoding = i === current ? 'sync' : 'async'
		img.src = url;
	}
}

function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(preloadImages)
