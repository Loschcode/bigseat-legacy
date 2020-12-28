import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SiginController extends Controller {
  @service auth;

  @action
  submitForm() {
    this.auth.signIn();
    this.transitionToRoute('rooms');
  }
}
