let size = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let symbol = "#"

function pyramid(size) {
  for(let i = 1; i <= size; i++) {
    console.log(" ".repeat(size-i) + symbol.repeat(i));
  }
}
console.log(pyramid(size))