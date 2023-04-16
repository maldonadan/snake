const Serpiente = require("./src/Serpiente");
const readline = require("readline");

const serpiente = new Serpiente({ x: 5, y: 5 });

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else {
    switch (key.name) {
      case "up":
        serpiente.irHaciaArriba();
        break;
      case "right":
        serpiente.irHaciaLaDerecha();
        break;
      case "left":
        serpiente.irHaciaIzquierda();
        break;
      case "down":
        serpiente.irHaciaAbajo();
        break;
      case "a":
        serpiente.come();
        break;
    }
  }
});

console.log(serpiente.tail());

setInterval(() => {
  console.clear();
  serpiente.avanza();
  const line = () => [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
  const lines = Array.from({ length: 10 }).map(line);
  const head = serpiente.head();
  lines[head.y][head.x] = "ö";
  serpiente.tail().forEach(({ y, x }) => {
    lines[y][x] = "o";
  });
  const output = lines.map((line) => line.join(".")).join("\n");
  console.log(output);
}, 220);
