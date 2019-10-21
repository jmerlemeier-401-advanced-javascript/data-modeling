'use strict';

const DataModel = require('../memory.js');

class Categories extends DataModel {
  constructor() {
    super({
      id: { type: 'string', required: true },
      name: { type: 'string', required: true },
    });
    
  }
}

module.exports = Categories;