// Performance test with Map
const map = new Map();

console.time('Map Performance');
for (let i = 0; i < 100000; i++) {
  const key = `Key ${i}`;
  const value = `Value ${i}`;
  map.set(key, value);
}
console.timeEnd('Map Performance');

// Performance test with Object
const obj = {};

console.time('Object Performance');
for (let i = 0; i < 100000; i++) {
  const key = `Key ${i}`;
  const value = `Value ${i}`;
  obj[key] = value;
}
console.timeEnd('Object Performance');
