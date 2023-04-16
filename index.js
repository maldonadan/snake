// const Serpiente = require("./src/Serpiente");
const ParteDeSerpiente = require("./src/ParteDeSerpiente");
const readline = require("readline");

// const serpiente = new Serpiente({ x: 5, y: 5 });
const serpiente = new ParteDeSerpiente({ x: 5, y: 5 });

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

let avanzar = () => serpiente.avanzarAlNorte();

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else {
    switch (key.name) {
      case "w":
        avanzar = () => serpiente.avanzarAlNorte();
        break;
      case "d":
        avanzar = () => serpiente.avanzarDerecha();
        break;
      case "a":
        avanzar = () => serpiente.avanzarOeste();
        break;
      case "s":
        avanzar = () => serpiente.avanzarSur();
        break;
      case "c":
        serpiente.agregarSeguidorAtras();
        break;
    }
    renderSnake();
  }
});

const emptyCells = () => new Array(20).fill(" ");

const renderSnake = () => {
  console.clear();
  const lines = emptyCells(20).map(() => emptyCells(20));

  lines[serpiente.y][serpiente.x] = "ö";
  lines[10][10] = "ó";

  if (serpiente.y === 10 && serpiente.x === 10) {
    serpiente.agregarSeguidorAtras();
  }

  serpiente.seguidores().forEach((seguidor) => {
    lines[seguidor.y][seguidor.x] = "o";
  });

  const output = lines.map((line) => line.join(".")).join("\n");
  console.log(output);
};

renderSnake();

setInterval(() => {
  avanzar();
  renderSnake();
}, 250);
