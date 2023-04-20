const { expect } = require("chai");
const ParteDeSerpiente = require("../src/ParteDeSerpiente");

describe("", () => {
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
  it("t6", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarDerecha();

    expect(unaSerpienteRecienCreada.x).to.eqls(6);
    expect(unaSerpienteRecienCreada.y).to.eqls(5);
  });
  it("t7", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();

    unaSerpienteRecienCreada.avanzarDerecha();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([
      { x: 5, y: 5 },
      { x: 5, y: 6 },
    ]);
  });
  it("t8", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarSur();

    expect(unaSerpienteRecienCreada.x).to.eqls(5);
    expect(unaSerpienteRecienCreada.y).to.eqls(6);
  });
  it("t9", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarSur();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
  it("t10", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarSur();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    unaSerpienteRecienCreada.avanzarSur();

    expect(unaSerpienteRecienCreada.x).to.eqls(5);
    expect(unaSerpienteRecienCreada.y).to.eqls(7);
    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 6 }]);
  });
  it("t11", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarSur();

    unaSerpienteRecienCreada.avanzarOeste();

    expect(unaSerpienteRecienCreada.x).to.eqls(4);
    expect(unaSerpienteRecienCreada.y).to.eqls(6);
  });
  it("t12", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarDerecha();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
  it("t13", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarOeste();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
  it("t14", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarSur();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
  it("t15", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([
      { x: 5, y: 6 },
      { x: 5, y: 7 },
      { x: 5, y: 8 },
    ]);
  });
  it("t16", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();

    unaSerpienteRecienCreada.avanzarDerecha();

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
  it("t17", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    expect(unaSerpienteRecienCreada.numeroDeAutoMordidas()).to.eqls(0);
  });
  it("t18", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();

    unaSerpienteRecienCreada.avanzarOeste();
    unaSerpienteRecienCreada.avanzarSur();
    unaSerpienteRecienCreada.avanzarDerecha();

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
