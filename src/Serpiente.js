class Serpiente {
  constructor({ x, y } = { x: 5, y: 5 }) {
    this.x = x;
    this.y = y;
    this.comida = 0;
    this.puntoCardinal = "norte";
    this.tailPositions = [
      {
        x: x,
        y: 6,
      },
      {
        x: x,
        y: 7,
      },
    ];
  }
  mide() {
    return 3 + this.comida;
  }
  come() {
    this.comida = 1;
    const last = this.tailPositions[this.tailPositions.length - 1];
    this.tailPositions = [...this.tailPositions, { ...last, y: last.y + 1 }];
  }
  irHaciaLaDerecha() {
    this.puntoCardinal = "este";
  }
  irHaciaIzquierda() {
    this.puntoCardinal = "oeste";
  }
  irHaciaArriba() {
    this.puntoCardinal = "norte";
  }
  irHaciaAbajo() {
    if (this.puntoCardinal === "oeste") {
      this.puntoCardinal = "sur";
    }
    if (this.puntoCardinal === "este") {
      this.puntoCardinal = "sur";
    }
  }
  vaHacia(puntoCardinalToCompare) {
    return this.puntoCardinal === puntoCardinalToCompare;
  }
  head() {
    return {
      x: this.x,
      y: this.y,
    };
  }
  tail() {
    return this.tailPositions;
  }
  avanza() {
    const x = this.x;
    const y = this.y;
    if (this.vaHacia("norte")) {
      this.y -= 1;
    }
    if (this.vaHacia("sur")) {
      this.y += 1;
    }
    if (this.vaHacia("este")) {
      this.x += 1;
    }
    if (this.vaHacia("oeste")) {
      this.x -= 1;
    }

    this.tailPositions = this.tailPositions.map(
      (tailPosition, index, array) => {
        return index === 0 ? { x, y } : array[index - 1];
      }
    );
    this.tailPositions = this.tailPositions.filter((a) => a !== undefined);
  }
}

module.exports = Serpiente;
