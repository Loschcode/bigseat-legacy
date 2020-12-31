import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminRoomsNewController extends Controller {
  @action
  attemptUpload() {
    this.transitionToRoute('admin.rooms.edit', 1); // TOOD - Need to be dynamic
  }
}
