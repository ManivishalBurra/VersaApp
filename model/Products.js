// model/Post.js
import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';
import children from '@nozbe/watermelondb/decorators/children';
import date from '@nozbe/watermelondb/decorators/date';

export default class Product extends Model {
  static table = 'products';
  static associations = {
    inventory: {type: 'has_many', foreignKey: 'product_id'},
  };

  @field('product_id') productId;
  @field('name') name;
  @field('practical_name') practicalName;
  @field('product_category') productCategory;
  @field('measurement_unit_name') measurementUnitName;
  @date('last_updated_on_versa') lastUpdatedOnVersa;
  @children('inventory') inventory;
}

// {name: 'product_id', type: 'number'},
// {name: 'name', type: 'string', isOptional: true},
// {name: 'practical_name', type: 'string', isOptional: true},
// {name: 'product_category', type: 'string', isOptional: true},
// {name: 'measurement_unit_name', type: 'string', isOptional: true},
// {name: 'last_updated_on_versa', type: 'number'},
