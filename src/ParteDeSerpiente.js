class ParteDeSerpiente {
  constructor({ x, y }, seguidoresAtras = []) {
    this.x = x;
    this.y = y;
    this.seguidoresAtras = seguidoresAtras;
    this.orientacion = "norte";
  }
  mirandoElSur() {
    this.orientacion = "sur";
  }
  andaPara({ x, y }) {
    return new ParteDeSerpiente(
      { x, y },
      this.seguidoresAtras.map((seguidor) => {
        return seguidor.andaPara({ x: this.x, y: this.y });
      })
    );
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
    const x = this.x;
    const y = this.y;
    this.y -= 1;
    this.seguidoresAtras = this.seguidoresAtras.map((seguidor) =>
      seguidor.andaPara({ x, y })
    );
  }
  avanzarDerecha() {
    this.orientacion = "este";
    const x = this.x;
    const y = this.y;
    this.x += 1;
    this.seguidoresAtras = this.seguidoresAtras.map((seguidor) =>
      seguidor.andaPara({ x, y })
    );
  }
  avanzarSur() {
    const x = this.x;
    const y = this.y;
    this.y += 1;
    this.seguidoresAtras = this.seguidoresAtras.map((seguidor) =>
      seguidor.andaPara({ x, y })
    );
  }
  avanzarOeste() {
    const x = this.x;
    const y = this.y;
    this.x -= 1;
    this.seguidoresAtras = this.seguidoresAtras.map((seguidor) =>
      seguidor.andaPara({ x, y })
    );
  }
  agregarSeguidorAtras() {
    if (!this.seguidoresAtras[0]) {
      if (this.orientacion === "sur") {
        this.seguidoresAtras.push(
          new ParteDeSerpiente({
            x: this.x,
            y: this.y - 1,
          })
        );
      } else if (this.orientacion === "este") {
        this.seguidoresAtras.push(
          new ParteDeSerpiente({
            x: this.x - 1,
            y: this.y,
          })
        );
      } else {
        this.seguidoresAtras.push(
          new ParteDeSerpiente({
            x: this.x,
            y: this.y + 1,
          })
        );
      }
    } else {
      this.seguidoresAtras[0].agregarSeguidorAtras();
    }
  }
}

module.exports = ParteDeSerpiente;
