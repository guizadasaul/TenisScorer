import getScore from "./puntaje.js";

describe("Marcador de puntaje de tenis", () => {
  it("En caso de que ambos jugadores tengan 0 el marcador es love, love", () => {
    expect(getScore(0,0)).toEqual("love - love");
  });
  it("En caso de que el primer jugador tenga 15-0", () => {
    expect(getScore(1,0)).toEqual("15 - 0");
  });
  it("En caso de que el primer jugador tenga 30-0", () => {
    expect(getScore(2,0)).toEqual("30 - 0");
  });
  it("En caso de que el primer jugador tenga 40-0", () => {
    expect(getScore(3,0)).toEqual("40 - 0");
  });
  it("En caso de que el segundo jugador tenga 0-15", () => {
    expect(getScore(0,1)).toEqual("0 - 15");
  });
});


