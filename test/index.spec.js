const { expect } = require("chai");
const Serpiente = require("../src/Serpiente");

function createUnaSerpiente() {
  return new Serpiente();
}
describe("abc", () => {
  it("t1", () => {
    const unaSerpienteRecienCreada = createUnaSerpiente();
    expect(1).to.eqls(2);
  });
});
