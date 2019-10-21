const Categories = require('../categories/categories.js');


describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    const schema = categories.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(categories.sanitize(testRecord)).toBeUndefined();
  });

  // How might we repeat this to check on types?
  it('sanitize() returns undefined because invalid type', () => {
    //do stuff
    //runs sanitize function and checks fr undefined.
    var testRecord = {
      id: 5555555,
      name: 66666,
    };
    expect(categories.sanitize(testRecord)).toBeUndefined();
  });


  it('can post() a new category', () => {
    let obj = { name: 'sfjfjfjf' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update a category', () => {
    //create test categories
    let obj = { name: 'Test Category' };
    categories.create(obj)
      .then(results => {
        return categories.get(results)
          .then(results => {
            categories.update({ name: 'Test Category' });
            expect(results).toBe({ name: 'Test Category' });
          });
      });
  });

  it('can delete a category', () => {
    let obj = { name: 'Test create' };
    return categories.create(obj)
      .then(results => {
        console.log(results.id);
        categories.delete()
          .then(() => {
            categories.get(results.id)
              .then(results => {
                expect(results.length).toBe(0);
              });
          });
      });
  });
});

