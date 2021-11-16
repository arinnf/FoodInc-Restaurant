import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// components
import './view/components/app-bar';
import './view/components/hero-element';
import './view/components/error-message';
import './view/components/footer-copyright';
import './view/components/page-loader';
// css file
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './view/app';
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});
const pageLoader = () => {
  document.querySelector('page-loader').classList.remove('no-anim');
  document.querySelector('page-loader div').classList.add('loader');
  document.body.style.opacity = '0.85';
};
const pageLoaderAfter = () => {
  const loadingTimeout = setInterval(() => {
    document.querySelector('page-loader').classList.add('no-anim');
    document.querySelector('page-loader div').classList.remove('loader');
    document.body.style.opacity = '1';
    clearTimeout(loadingTimeout);
  }, 1000);
};
window.addEventListener('hashchange', () => {
  pageLoader();
  app.renderPage();
  pageLoaderAfter();
});
window.addEventListener('load', () => {
  pageLoader();
  app.renderPage();
  swRegister();
  pageLoaderAfter();
});
