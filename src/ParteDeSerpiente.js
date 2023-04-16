class ParteDeSerpiente {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
    this.seguidoresAtras = [];
  }
  seguidores() {
    return this.seguidoresAtras.flatMap((parte) =>
      parte.seguidores().length > 0
        ? [
            { x: parte.x, y: parte.y },
            { x: parte.seguidores()[0].x, y: parte.seguidores()[0].y },
          ]
        : [{ x: parte.x, y: parte.y }]
    );
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
    if (!this.seguidoresAtras[0]) {
      this.seguidoresAtras.push(
        new ParteDeSerpiente({
          x: this.x,
          y: this.y + 1,
        })
      );
    } else {
      this.seguidoresAtras[0].agregarSeguidorAtras();
    }
  }
}

module.exports = ParteDeSerpiente;
