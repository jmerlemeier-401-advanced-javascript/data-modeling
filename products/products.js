'use strict';

const DataModel = require('../memory.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      category_id: {type: String, required: true},
      price: {type: Number, required: true },
      weight: {type: Number},
      quantity: {type: Number, required: true},
    };
  }
}