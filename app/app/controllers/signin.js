import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SiginController extends Controller {
  @service auth;

  isProcessing = false

  @action
  submitForm() {
    this.set('isProcessing', true);

    setTimeout(function () {
      this.set('isProcessing', false);
      this.auth.signIn();
      this.transitionToRoute('rooms');
    }.bind(this), 2000);
  }
}
