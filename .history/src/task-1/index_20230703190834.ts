function deepCopyArray<T>(arr: T[]): T[] {
    return JSON.parse(JSON.stringify(arr));
}

// Usage
const original = [{a: 1, b: {c: 3}}, [1, 2, 3], 'string', 123];
const copy = deepCopyArray(original);

// Modify copy
copy[0]['a'] = 10;

// Original stays the same
console.log(original[0]['a']);  // Output: 1

// Copy is modified
console.log(copy[0]['a']);  // Output: 10
