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
        avanzar = () => serpiente.avanzarAlEste();
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
    // avanzar();
    // renderSnake();
  }
});

const emptyCells = () => new Array(20).fill(" ");

let appleX = 8;
let appleY = 3;
let frame = 0;
let score = 0;

const renderSnake = () => {
  console.clear();
  console.log("Frame: ", frame);
  console.log("Score: ", score);
  console.log("Mordidas: ", serpiente.numeroDeAutoMordidas());

  const lines = emptyCells(20).map(() => emptyCells(20));

  if (serpiente.y === appleY && serpiente.x === appleX) {
    serpiente.agregarSeguidorAtras();
    appleY = appleY > 19 ? 2 : appleY + 1;
    appleX = appleX > 8 ? 3 : 9;
    score++;
  }

  lines[appleY][appleX] = "ó";

  lines[serpiente.y][serpiente.x] = "ö";

  serpiente.seguidores().forEach((seguidor) => {
    lines[seguidor.y][seguidor.x] = "o";
  });

  const output = lines.map((line) => line.join(".")).join("\n");
  console.log(output);
  frame++;
};

renderSnake();

setInterval(() => {
  avanzar();
  renderSnake();
}, 200);
