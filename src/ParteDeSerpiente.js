class ParteDeSerpiente {
  constructor({ x, y }, orientacion = "norte", seguidoresAtras = []) {
    this.x = x;
    this.y = y;
    this.seguidoresAtras = seguidoresAtras;
    this.orientacion = orientacion;
  }
  andaPara({ x, y }, orientacion) {
    return new ParteDeSerpiente(
      { x, y },
      orientacion,
      this.seguidoresAtras.map((seguidor) =>
        seguidor.andaPara({ x: this.x, y: this.y }, orientacion)
      )
    );
  }
  seguidores() {
    return this.seguidoresAtras.flatMap((parte) =>
      parte.seguidores().length > 0
        ? [{ x: parte.x, y: parte.y }, ...parte.seguidores()]
        : [{ x: parte.x, y: parte.y }]
    );
  }
  updateSeguidoresAtras({ x, y }) {
    this.seguidoresAtras = this.seguidoresAtras.map((seguidor) =>
      seguidor.andaPara({ x, y }, this.orientacion)
    );
  }
  avanzarAlNorte() {
    this.orientacion = "norte";
    const x = this.x;
    const y = this.y;
    this.y -= 1;
    this.updateSeguidoresAtras({ x, y });
  }
  avanzarDerecha() {
    this.orientacion = "este";
    const x = this.x;
    const y = this.y;
    this.x += 1;
    this.updateSeguidoresAtras({ x, y });
  }
  avanzarSur() {
    this.orientacion = "sur";
    const x = this.x;
    const y = this.y;
    this.y += 1;
    this.updateSeguidoresAtras({ x, y });
  }
  avanzarOeste() {
    this.orientacion = "oeste";
    const x = this.x;
    const y = this.y;
    this.x -= 1;
    this.updateSeguidoresAtras({ x, y });
  }
  agregarSeguidorAtras() {
    if (this.seguidoresAtras[0]) {
      this.seguidoresAtras[0].agregarSeguidorAtras();
    } else {
      this.seguidoresAtras.push(
        new ParteDeSerpiente(
          {
            x:
              this.orientacion === "este"
                ? this.x - 1
                : this.orientacion === "oeste"
                ? this.x + 1
                : this.x,
            y:
              this.orientacion === "sur"
                ? this.y - 1
                : this.orientacion === "norte"
                ? this.y + 1
                : this.y,
          },
          this.orientacion
        )
      );
    }
  }
}

module.exports = ParteDeSerpiente;
