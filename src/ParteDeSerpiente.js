class ParteDeSerpiente {
  constructor({ x, y }, orientacion = "norte", seguidoresAtras = []) {
    this.x = x;
    this.y = y;
    this.seguidoresAtras = seguidoresAtras;
    this.orientacion = orientacion;
    this.mordidas = 0;
  }
  numeroDeAutoMordidas() {
    return this.mordidas;
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
  moverSeguidorA({ x, y }) {
    this.seguidoresAtras = this.seguidoresAtras.map((seguidor) =>
      seguidor.andaPara({ x, y }, this.orientacion)
    );
    const seguidores = this.seguidores();
    if (
      seguidores.some(
        (seguidor) => seguidor.x === this.x && seguidor.y === this.y
      )
    ) {
      this.mordidas += 1;
    }
  }
  posicionActual() {
    return { x: this.x, y: this.y };
  }
  avanzarAlNorte() {
    this.orientacion = "norte";
    const posicionAntesDeMoverme = this.posicionActual();
    this.y -= 1;
    this.moverSeguidorA(posicionAntesDeMoverme);
  }
  avanzarAlEste() {
    this.orientacion = "este";
    const posicionAntesDeMoverme = this.posicionActual();
    this.x += 1;
    this.moverSeguidorA(posicionAntesDeMoverme);
  }
  avanzarSur() {
    this.orientacion = "sur";
    const posicionAntesDeMoverme = this.posicionActual();
    this.y += 1;
    this.moverSeguidorA(posicionAntesDeMoverme);
  }
  avanzarOeste() {
    this.orientacion = "oeste";
    const posicionAntesDeMoverme = this.posicionActual();
    this.x -= 1;
    this.moverSeguidorA(posicionAntesDeMoverme);
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
