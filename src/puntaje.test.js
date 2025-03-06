import puntuacion from "./puntaje.js";
import sumar from "./puntaje.js";

describe("Marcador de puntaje de tenis", () => {
  it("En caso de que ambos jugadores tengan 0 el marcador es love, love", () => {
    expect(puntuacion(0,0)).toEqual("love - love");
  });
  it("En caso de que uno de los juagadores tenga 15-0", () => {
    expect(puntuacion(1,0)).toEqual("15 - love");
  });
});


