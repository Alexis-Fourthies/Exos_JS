function chatbot(userPhrase) {
  switch (true) {

    case (userPhrase == "" || userPhrase == null):
      return 'T\'es en PLS ?';

    case isQuestion(userPhrase):
      return 'Ouais Ouais..';

    case isUpperCase(userPhrase):
      return 'Pwa, calme-toi...';

    case containFortnite(userPhrase):
      return 'On s\'fait une partie en soum-soum  ?';

    default:
      return "J'm'en balek mais d'une force !";

  }
}

function getUserPhrase () {
  let answer = prompt("Tu veux quoi ?");
  console.log(answer);
  return answer;
}


function isQuestion (userPhrase) {
  if (userPhrase[userPhrase.length - 1] == '?') {
    return true
  } else {
    return false
  }
}


function isUpperCase(userPhrase) {
    return userPhrase === userPhrase.toUpperCase();
}

function containFortnite (userPhrase) {
  if (userPhrase.includes("fortnite")) {
    return true;
  } else {
    return false;
  }
}


for(;;) {
let phrase = getUserPhrase();
console.log(chatbot(phrase));
}