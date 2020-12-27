import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default class IndexRoute extends Route {
  @service cookies;

  beforeModel() {
    if (!this.didSignup()) {
      return this.transitionTo('signup');
    }

    if (!this.didSignin()) {
      return this.transitionTo('signin');
    }

    return this.transitionTo('rooms');
  }

  didSignup() {
    return this.cookies.read('didSignup') === 'true';
  }

  didSignin() {
    return this.cookies.read('didSignin') === 'true';
  }
}
