import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AdminIndexRoute extends Route {

  beforeModel() {
    this.transitionTo('admin.rooms');
  }
}
