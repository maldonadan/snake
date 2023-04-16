const { expect } = require("chai");
const ParteDeSerpiente = require("../src/ParteDeSerpiente");

describe("abc", () => {
  it("t1", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarAlNorte();

    expect(unaSerpienteRecienCreada.x).to.eqls(5);
    expect(unaSerpienteRecienCreada.y).to.eqls(4);
  });
  it("t2", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 6 }]);
  });
  it("t3", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.avanzarAlNorte();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
  it("t4", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.agregarSeguidorAtras();
    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([
      { x: 5, y: 6 },
      { x: 5, y: 7 },
    ]);
  });
  it("t5", () => {
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

    unaSerpienteRecienCreada.mirandoElSur();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 4 }]);
  });
  it("t10", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.mirandoElSur();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    unaSerpienteRecienCreada.avanzarSur();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
  it("t11", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.mirandoElSur();

    unaSerpienteRecienCreada.avanzarOeste();

    expect(unaSerpienteRecienCreada.x).to.eqls(4);
    expect(unaSerpienteRecienCreada.y).to.eqls(5);
  });
  it("t12", () => {
    const unaSerpienteRecienCreada = new ParteDeSerpiente({ x: 5, y: 5 });

    unaSerpienteRecienCreada.avanzarDerecha();

    unaSerpienteRecienCreada.agregarSeguidorAtras();

    expect(unaSerpienteRecienCreada.seguidores()).to.eqls([{ x: 5, y: 5 }]);
  });
});
