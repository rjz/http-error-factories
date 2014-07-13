var errors = require('../index'),
    assert = require('assert');

describe('an error factory', function () {
  var err;

  it('is defined', function () {
    assert.ok(errors.imATeapot);
  });

  it('creates errors with the specified message', function () {
    var expected = 'Short \'n Stout';
    err = errors.imATeapot(expected);
    assert.equal(err.message, expected);
  });

  it('inherits the right stuff', function () {
    assert.ok(err instanceof errors.ImATeapotError);
    assert.ok(err instanceof errors.HTTPError);
  });
});

