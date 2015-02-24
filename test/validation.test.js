/* jshint mocha: true */
var expect = require('chai').expect;
var validate = require('..');
var glob = require('glob');

var fixtures = glob.sync('test/fixtures/**.json');

describe('validation', function() {
  it('exposes a function', function() {
    expect(validate)
      .to.be.a('function');
  });

  fixtures.forEach(function(fixture) {
    var json = require('../' + fixture);
    var valid = json.valid;
    var testName = json.name + (valid ? ' is valid' : ' is not valid');
    it(testName, function() {
      expect(validate(json.object))
        .to.equal(valid);
    });
  });
});
