'use strict';

var assert = require('assert');
var isSubtitle = require('./');

describe('isSubtitle', function () {

  it('should recognize subtitle formats', function () {
    assert(isSubtitle('thing.aqt'));
    assert(isSubtitle('thing.gsub'));
    assert(isSubtitle('thing.jss'));
    assert(isSubtitle('thing.sub'));
    assert(isSubtitle('thing.ttxt'));
    assert(isSubtitle('thing.pjs'));
    assert(isSubtitle('thing.psb'));
    assert(isSubtitle('thing.rt'));
    assert(isSubtitle('thing.smi'));
    assert(isSubtitle('thing.slt'));
    assert(isSubtitle('thing.ssf'));
    assert(isSubtitle('thing.srt'));
    assert(isSubtitle('thing.ssa'));
    assert(isSubtitle('thing.ass'));
    assert(isSubtitle('thing.usf'));
    assert(isSubtitle('thing.idx'));
    assert(isSubtitle('thing.vtt'));
  });

  it('should not recognize non-subtitle formats', function () {
    assert(!isSubtitle('thing.png'));
    assert(!isSubtitle('thing.gif'));
    assert(!isSubtitle('thing.mp4'));
    assert(!isSubtitle('thing.mpg'));
    assert(!isSubtitle('thing.doc'));
    assert(!isSubtitle('thing.js'));
    assert(!isSubtitle('thing.dmg'));
    assert(!isSubtitle('thing.exe'));
  });

});
