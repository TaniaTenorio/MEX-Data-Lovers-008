// eslint-disable-next-line no-unused-vars
const pokemon = require('../src/data.js');
const dataMock = {
"pokemon":[
    {
      "id": 1,
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
      ],
      "weight": "6.9 kg",
      "height": "0.71 m",
      "candy_count": 25
    },
    {
      "id": 4,
    "num": "004",
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": "8.5 kg",
    "height": "0.61 m",
    "candy_count": 25
    },
    {
      "id": 6,
    "num": "006",
    "name": "Charizard",
    "type": [
      "Fire",
      "Flying"
    ],
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ],
    "weight": "90.5 kg",
    "height": "1.70 m",
    "candy_count": 12,
    }
]
};


describe("pokemon", () => {
  it("is an object", () => {
    expect(typeof pokemon).toBe("object");
  });
});

describe('pokemon.ordenar', () => {
  it('is a function', () => {
    expect(typeof window.pokemon.ordenar).toBe('function');
  });
  it("debería retornar un objeto", () => {
    expect(window.pokemon.ordenar({}) instanceof Object).toBe(true);
  });
  });

describe("pokemon.filterByType", () => {
  it("is a function", () => {
    expect(typeof window.pokemon.filterByType).toBe("function");
  });
  it("debería retornar un arreglo", () => {
    expect(window.pokemon.filterByType([]) instanceof Array).toBe(true);
  });
  it("debería retornar un arreglo con el objeto de Bulbasaur", () => {
    expect(window.pokemon.filterByType(dataMock.pokemon,"Grass")).toEqual([dataMock.pokemon[0]]);
  });
});

describe("pokemon.filterByWeaknesses", () => {
  it("is a function", () => {
    expect(typeof window.pokemon.filterByWeaknesses).toBe("function");
  });
  it("debería retornar un arreglo", () => {
    expect(window.pokemon.filterByWeaknesses([])instanceof Array).toBe(true);
  });
    it("debería retornar un arreglo con el objeto de Charizard", () => {
      expect(window.pokemon.filterByWeaknesses(dataMock.pokemon,"Electric")).toEqual([dataMock.pokemon[2]]);
    });
  });

  describe("pokemon.estadistica", () => {
    it("is a function", () => {
      expect(typeof window.pokemon.estadistica).toBe("function");
  });
    it("debería retornar el pokemon mas pesado", () => {
    expect(window.pokemon.estadistica(dataMock.pokemon,"weight")).toEqual(dataMock.pokemon[0]);
  });
    it("debería retornar el pokemon mas alto", () => {
    expect (window.pokemon.estadistica(dataMock.pokemon,"height")).toEqual([dataMock.pokemon[2]]);
  });
  it("debería retornar el promedio de candy count", () => {
      expect (window.pokemon.estadistica(dataMock.pokemon, "candy_count")).toBe(20);
    });
});

// describe("dataMock", () => {
//   it("debería retornar el candy count", () => {
//     expect(dataMock.pokemon[2].candy_count).toEqual(12);
//   });
//   //   it("debería retornar el promedio de candy count", () => {
//   //   expect (window.pokemon.estadistica(dataMock.pokemon, "candy_count")).toBe(20);
//   // });
// });





