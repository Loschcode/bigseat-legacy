import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class RoomsRoute extends Route {
  @service auth;
  beforeModel() {
    if (!this.auth.isSignedIn()) {
      return this.transitionTo('signin');
    }
  }
}
