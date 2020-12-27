import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignupController extends Controller {
  @service cookies;

  @action
  submitForm() {
    this.cookies.write('didSignup', true);
    this.transitionToRoute('application');
  }
}
