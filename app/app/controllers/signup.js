import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignupController extends Controller {
  @action
  submitForm() {
    this.transitionToRoute('rooms');
  }
}
