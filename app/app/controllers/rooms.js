import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RoomsController extends Controller {
  @action
  attemptUpload() {
    this.transitionToRoute('rooms.edit', 1); // TOOD - Need to be dynamic
  }
}
