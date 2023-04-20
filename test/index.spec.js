const { expect } = require("chai");
const ParteDeSerpiente = require("../src/ParteDeSerpiente");

describe("Snake", () => {
  it("should go 1 step to the north", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarAlNorte();

    expect(unaSerpienteRecienCreada.x).to.eqls(5);
    expect(unaSerpienteRecienCreada.y).to.eqls(4);
  });
  it("should add a new part at the end", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 6 }]);
  });
  it("should be followed by his new part at the end when it goes to the north", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.avanzarAlNorte();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
  it("should add a new part at the end of the previous parts", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([
      { x: 5, y: 6 },
      { x: 5, y: 7 },
    ]);
  });
  it("should be followed by every part at the end when it goes to the north", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();

    unaSerpienteRecienCreada.avanzarAlNorte();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([
      { x: 5, y: 5 },
      { x: 5, y: 6 },
    ]);
  });
  it("should go 1 step to the east", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarAlEste();

    expect(unaSerpienteRecienCreada.x).to.eqls(6);
    expect(unaSerpienteRecienCreada.y).to.eqls(5);
  });
  it("should add a new part at the left side when going to east", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarAlEste();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
  it("should go 1 step to the south", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarSur();

    expect(unaSerpienteRecienCreada.x).to.eqls(5);
    expect(unaSerpienteRecienCreada.y).to.eqls(6);
  });
  it("should add a new part at the top side when going to south", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarSur();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
  it("should be followed his new part at the top when it goes to the south", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarSur();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    unaSerpienteRecienCreada.avanzarSur();

    expect(unaSerpienteRecienCreada.x).to.eqls(5);
    expect(unaSerpienteRecienCreada.y).to.eqls(7);
    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 6 }]);
  });
  it("should go 1 step to the left when going to the west", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarOeste();

    expect(unaSerpienteRecienCreada.x).to.eqls(4);
    expect(unaSerpienteRecienCreada.y).to.eqls(5);
  });
  it("should add a new part at the right side when going to west", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarOeste();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
  it("should add a new part at the left side of the last parts when going to east", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();

    unaSerpienteRecienCreada.avanzarAlEste();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.x).to.eqls(6);
    expect(unaSerpienteRecienCreada.y).to.eqls(5);

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([
      { x: 5, y: 5 },
      { x: 5, y: 6 },
      { x: 5, y: 7 },
      { x: 4, y: 7 },
    ]);
  });
  it("should have 0 bites when is created", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    expect(unaSerpienteRecienCreada.numeroDeAutoMordidas()).to.eqls(0);
  });
  it("should have 1 bites more everytime the head is in the same x and y of any part", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();

    unaSerpienteRecienCreada.avanzarOeste();
    unaSerpienteRecienCreada.avanzarSur();
    unaSerpienteRecienCreada.avanzarAlEste();

    expect(unaSerpienteRecienCreada.x).to.eqls(5);
    expect(unaSerpienteRecienCreada.y).to.eqls(6);

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([
      {
        x: 4,
        y: 6,
      },
      {
        x: 4,
        y: 5,
      },
      {
        x: 5,
        y: 5,
      },
      {
        x: 5,
        y: 6,
      },
    ]);

    expect(unaSerpienteRecienCreada.numeroDeAutoMordidas()).to.eqls(1);
  });
});
