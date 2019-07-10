// eslint-disable-next-line no-unused-vars
const pokemon = require('../src/data.js');

describe("pokemon", () => {
  it("is an object", () => {
    expect  (typeof pokemon).toBe("object");
  });
});

describe('pokemon.ordenar', () => {
  it('is a function', () => {
    expect(typeof window.pokemon.ordenar).toBe('function');
  });
});

describe("pokemon.filterByType", () => {
  it("is an object", () => {
    expect(typeof window.pokemon.ordenar).toBe("function");
  });
});
