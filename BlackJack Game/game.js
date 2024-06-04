let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 11) + 2;
  return randomNum;
}
function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "You've got BlackJack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  document.getElementById("message").innerText = message;
  document.getElementById("sum").innerText = "Sum: " + sum;
  let text = "";
  //   document.getElementById("cards").innerText = "Cards: " + cards[0] + cards[1];
  for (let i = 0; i < cards.length; i++) {
    text = text + " " + cards[i];
  }

  document.getElementById("cards").innerText = "Cards: " + text;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard1 = getRandomCard();
    sum = sum + newCard1;
    cards.push(newCard1);
    renderGame();
  }
}
