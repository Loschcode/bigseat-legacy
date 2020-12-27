import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SiginController extends Controller {
  @service cookies;

  @action
  submitForm() {
    this.cookies.write('didSignin', true);
    this.transitionToRoute('application');
  }
}
