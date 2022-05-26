let name = "";
let ask;


while (true) {
  ask = prompt("Quel est ton prénom ?");

  if (ask) {
    name += ask;
  } else {

  } break;
}

console.log("Bonjour, monde");
console.log(`Bonjour, ${name}`);
