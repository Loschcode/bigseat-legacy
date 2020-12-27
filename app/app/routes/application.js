import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  @service('intl') intl;

  beforeModel() {
    this.intl.setLocale(['en-us']);
  }
}
