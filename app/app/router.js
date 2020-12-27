import EmberRouter from '@ember/routing/router';
import config from 'bigseat/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('signup');
  this.route('signin');

  this.route('rooms', function () {
    this.route('new');
  });

  this.route('analytics', function () {
  });

  this.route('people', function () {

  });

  this.route('integrations');
  this.route('settings');
  this.route('style-guide');

  this.route('not-found', { path: '/*path' });
});
