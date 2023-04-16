class ParteDeSerpiente {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
    this.seguidoresAtras = [];
  }
  seguidores() {
    return this.seguidoresAtras.map((parte) => ({ x: parte.x, y: parte.y }));
  }
  avanzarAlNorte() {
    const y = this.y;
    this.y -= 1;
    this.seguidoresAtras = this.seguidoresAtras.map(
      () =>
        new ParteDeSerpiente({
          x: this.x,
          y,
        })
    );
  }
  agregarSeguidorAtras() {
    this.seguidoresAtras.push(
      new ParteDeSerpiente({
        x: this.x,
        y: this.y + 1,
      })
    );
  }
}

module.exports = ParteDeSerpiente;
