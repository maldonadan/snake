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
});
