const { expect } = require("chai");
const Serpiente = require("../src/Serpiente");

function createUnaSerpiente() {
  return new Serpiente();
}
describe("abc", () => {
  it("t1", () => {
    const unaSerpienteRecienCreada = createUnaSerpiente();
    expect(unaSerpienteRecienCreada.mide()).to.eqls(3);
  });
  it("t2", () => {
    const unaSerpienteRecienCreada = createUnaSerpiente();

    unaSerpienteRecienCreada.come();

    expect(unaSerpienteRecienCreada.mide()).to.eqls(4);
  });
  it("t3", () => {
    const unaSerpienteRecienCreada = createUnaSerpiente();
    expect(unaSerpienteRecienCreada.vaHacia("norte")).to.be.true;
  });
  it("t3", () => {
    const unaSerpienteRecienCreada = createUnaSerpiente();

    unaSerpienteRecienCreada.irHaciaLaDerecha();

    expect(unaSerpienteRecienCreada.vaHacia("este")).to.be.true;
  });
  it("t4", () => {
    const unaSerpienteRecienCreada = createUnaSerpiente();

    unaSerpienteRecienCreada.irHaciaIzquierda();

    expect(unaSerpienteRecienCreada.vaHacia("oeste")).to.be.true;
  });
  it("t5", () => {
    const unaSerpienteRecienCreada = createUnaSerpiente();

    unaSerpienteRecienCreada.irHaciaAbajo();

    expect(unaSerpienteRecienCreada.vaHacia("norte")).to.be.true;
  });
  it("t6", () => {
    const unaSerpienteRecienCreada = createUnaSerpiente();

    unaSerpienteRecienCreada.irHaciaIzquierda();
    unaSerpienteRecienCreada.irHaciaAbajo();

    expect(unaSerpienteRecienCreada.vaHacia("sur")).to.be.true;
  });
  it("t7", () => {
    const unaSerpienteRecienCreada = createUnaSerpiente();

    unaSerpienteRecienCreada.irHaciaLaDerecha();
    unaSerpienteRecienCreada.irHaciaAbajo();

    expect(unaSerpienteRecienCreada.vaHacia("sur")).to.be.true;
  });
  it("t8", () => {
    const unaSerpienteRecienCreada = createUnaSerpiente();

    unaSerpienteRecienCreada.irHaciaLaDerecha();
    unaSerpienteRecienCreada.irHaciaArriba();

    expect(unaSerpienteRecienCreada.vaHacia("norte")).to.be.true;
  });
  it("t9", () => {
    const x = 5;
    const y = 5;
    const unaSerpienteRecienCreada = createUnaSerpiente({ x, y });

    unaSerpienteRecienCreada.avanza();

    expect(unaSerpienteRecienCreada.head()).to.eqls({ x: 5, y: 4 });
  });
  it("t10", () => {
    const x = 5;
    const y = 5;
    const unaSerpienteRecienCreada = createUnaSerpiente({ x, y });

    expect(unaSerpienteRecienCreada.tail()).to.eqls([
      { x: 5, y: 6 },
      { x: 5, y: 7 },
    ]);
  });
  it("t11", () => {
    const x = 5;
    const y = 5;
    const unaSerpienteRecienCreada = createUnaSerpiente({ x, y });

    unaSerpienteRecienCreada.come();

    expect(unaSerpienteRecienCreada.tail()).to.eqls([
      { x: 5, y: 6 },
      { x: 5, y: 7 },
    ]);
  });
});
