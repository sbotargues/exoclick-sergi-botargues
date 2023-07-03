// __tests__/deepCopy.test.ts

import deepCopy from '../../src/task-1-ts/index.js';

describe('deepCopy function', () => {
  it('should return a deep copy of a primitive value', () => {
    const value = 1;
    expect(deepCopy(value)).toBe(value);
  });

  it('should return a deep copy of an array', () => {
    const array = [1, 2, 3];
    const copiedArray = deepCopy(array);

    expect(copiedArray).toEqual(array);
    expect(copiedArray).not.toBe(array);
  });

  it('should return a deep copy of an object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const copiedObject = deepCopy(object);

    expect(copiedObject).toEqual(object);
    expect(copiedObject).not.toBe(object);
  });

  it('should return a deep copy of a nested object', () => {
    const nestedObject = { a: 1, b: { c: 2, d: 3 } };
    const copiedNestedObject = deepCopy(nestedObject);

    expect(copiedNestedObject).toEqual(nestedObject);
    expect(copiedNestedObject).not.toBe(nestedObject);
    expect(copiedNestedObject.b).toEqual(nestedObject.b);
    expect(copiedNestedObject.b).not.toBe(nestedObject.b);
  });

  it('should return a deep copy of an array with objects', () => {
    const array = [{ a: 1 }, { b: 2 }];
    const copiedArray = deepCopy(array);

    expect(copiedArray).toEqual(array);
    expect(copiedArray).not.toBe(array);
    expect(copiedArray[0]).toEqual(array[0]);
    expect(copiedArray[0]).not.toBe(array[0]);
  });
});
