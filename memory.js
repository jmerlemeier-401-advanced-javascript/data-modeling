'use strict';

const uuid = require('uuid/v4');

const Validator = require('./validator');
const validator = new Validator();

class DataModel {

  constructor(schema) {
    this.database = [];
    this.schema = schema;
  }

  get(id) {
    let response = id ? this.database.filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
  }

  create(entry) {
    entry.id = uuid();
    let record = this.sanitize(entry);
    if (record.id) { this.database.push(record); }
    return Promise.resolve(record);
  }

  update(id, entry) {
    let record = this.sanitize(entry);
    if (record.id) { this.database = this.database.map((item) => (item.id === id) ? record : item); }
    return Promise.resolve(record);
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

  //Add stuff from validator to this
  sanitize(entry) {

    let valid = true;
    let record = {};
    
    Object.keys(this.schema).forEach(field => {
      if (this.schema[field].required) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      } else {
        record[field] = entry[field];
      }
      const type = this.schema[field].type;
      for (const key in record) {
        if (validator.isValid(record[key], type) === false) {
          valid = false;
        }
      }
    });

    return valid ? record : undefined;
  }

}

module.exports = DataModel;