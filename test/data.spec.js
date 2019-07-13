// eslint-disable-next-line no-unused-vars
const pokemon = require('../src/data.js');
const dataMock = [
    {"id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"],
    "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ]},
      {"id": 2,
      "num": "002",
      "name": "Ivysaur",
      "type": [
        "Grass",
        "Poison"],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ]},
      {"id": 3,
      "num": "003",
      "name": "Venusaur",
      "type": [
        "Grass",
        "Poison"],
      "weaknesses": [
        "Ice",
        "Flying",
        "Psychic",
        "Fire"
        ]}
];

describe("pokemon", () => {
  it("is an object", () => {
    expect  (typeof pokemon).toBe("object");
  });
});

describe('pokemon.ordenar', () => {
  it('is a function', () => {
    expect(typeof window.pokemon.ordenar).toBe('function');
  it("debería retornar un objeto", () => {
    expect(typeof window.pokemon.ordenar).toBe("object");
  })
  });
});

describe("pokemon.filterByType", () => {
  it("is a function", () => {
    expect(typeof window.pokemon.filterByType).toBe("function");
  it("debería retonrar un arreglo", () => {
    expect(window.pokemon.filterByType([]) instanceof Array).toBe(true);
  });
  it("debería retornar un arreglo con el objeto de Bulbasaur", () => {
    expect (window.pokemon.filterByType(dataMock, "Grass")).toEqual([dataMock[0]]);
  });
});
});

describe("pokemon.filterByWeaknesses", () => {
  it("is a function", () => {
    expect(typeof window.pokemon.filterByWeaknesses).toBe("function");
    it("debería retornar un arreglo", () => {
      expect(window.pokemon.filterByWeaknesses([])instanceof Array).toBe(true);
    });
    it("debería retornar un arreglo con el objeto de Venusaur", () => {
      expect (window.pokemon.filterByWeaknesses(dataMock,"Ice")).toEqual([dataMock[2]]);
    });
  });
});




