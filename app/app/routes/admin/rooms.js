import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class AdminRoomsRoute extends Route {
  @service auth;
  beforeModel() {
  }
}
