require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example.sort).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
