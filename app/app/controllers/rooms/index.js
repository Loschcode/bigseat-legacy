import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RoomsIndexController extends Controller {
  queryParams = ['withRecords']

  withRecords = null;

  get showRecords() {
    return this.withRecords === 'true';
  }
}
