import Model, { attr } from '@ember-data/model';

export default class RoomModel extends Model {
  @attr name;
  @attr slug;
}
