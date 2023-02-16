import { assert } from 'chai';
import { addPerson } from '../personerLogik.js';

describe('addPerson', function() {
  it('should add a person to the array', function() {
    let personArray = [];
    let navn = 'John';
    let alder = 30;
    personArray = addPerson(personArray, navn, alder);
    assert.equal(personArray.length, 1);
    assert.equal(personArray[0].navn, navn);
    assert.equal(personArray[0].alder, alder);
  });

  it('should add multiple persons to the array', function() {
    let personArray = [];
    let navn1 = 'John';
    let alder1 = 30;
    let navn2 = 'Jane';
    let alder2 = 25;
    personArray = addPerson(personArray, navn1, alder1);
    personArray = addPerson(personArray, navn2, alder2);
    assert.equal(personArray.length, 2);
    assert.equal(personArray[0].navn, navn1);
    assert.equal(personArray[0].alder, alder1);
    assert.equal(personArray[1].navn, navn2);
    assert.equal(personArray[1].alder, alder2);
  });
});