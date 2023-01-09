import EmberRouter from '@ember/routing/router';
import config from 'lynx/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('four-oh-four', { path: '/*path' });
  this.route('index', { path: '/' }, function () {});
});
