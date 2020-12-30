import Route from '@ember/routing/route';

export default class RoomsIndexRoute extends Route {
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('withRecords', null);
    }
  }
}
