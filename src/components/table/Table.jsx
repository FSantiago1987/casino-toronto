import React, { useState } from "react";
import Card from "../card/Card";
import Deck from "../deck/Deck";
import "./table.css";
import CoverB from "../../assets/images/coverB.jpg";
import CoverR from "../../assets/images/coverR.jpg";

const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];


function Table() {
  const CARD_VALUE_MAP = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  const [computerDeckNumber, setComputerDeckNumber] = useState("");
  const [playerDeckNumber, setPlayerDeckNumber] = useState("");
  const [text, SetText] = useState("Let's Have Some Fun!!!");
  const [action, SetAction] = useState("Start New Game");
  const [stop, SetStop] = useState(true);
  let [playerDeck, SetPlayerDeck] = useState("");
  let [computerDeck, SetComputerDeck] = useState("");
  let [inRound, SetInRound] = useState("");
  let [playerCardSlot, SetPlayerCardSlot] = useState("");
  let [computerCardSlot, SetComputerCardSlot] = useState("");

  const StartGame = () => {
    const deck = new Deck();
    deck.shuffle();
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
    SetPlayerDeck((playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))));
    SetComputerDeck(
      (computerDeck = new Deck(
        deck.cards.slice(deckMidpoint, deck.numberOfCards)
      ))
    );
    SetInRound(false);
    SetStop(false);
    cleanBeforeRound();
  };
  const cleanBeforeRound = () => {
    SetInRound(false);
    SetComputerCardSlot("");
    SetPlayerCardSlot("");
    SetText("");

    updateDeckCount();
  };
  const updateDeckCount = () => {
    setComputerDeckNumber(computerDeck.numberOfCards);
    setPlayerDeckNumber(playerDeck.numberOfCards);
  };

  const isRoundWinner = (cardOne, cardTwo) => {
    return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value];
  };

  const isGameOver = (deck) => {
    return deck.numberOfCards === 0;
  };

  const flipCards = () => {
    SetInRound(true);
    const playerCard = playerDeck.pop();
    const computerCard = computerDeck.pop();
    SetPlayerCardSlot((playerCardSlot = playerCard.createCard()));
    SetComputerCardSlot((computerCardSlot = computerCard.createCard()));

    updateDeckCount();

    if (isRoundWinner(playerCard, computerCard)) {
      SetText("You Win");
      playerDeck.push(playerCard);
      playerDeck.push(computerCard);
    } else if (isRoundWinner(computerCard, playerCard)) {
      SetText("You Lose");
      computerDeck.push(playerCard);
      computerDeck.push(computerCard);
    } else {
      SetText("Draw");
      playerDeck.push(playerCard);
      computerDeck.push(computerCard);
    }

    if (isGameOver(playerDeck)) {
      SetText("Player Lose War!! Better Luck Next Time");
      SetStop(true);
    } else if (isGameOver(computerDeck)) {
      SetText("Player Win War!! Congratulations");
      SetStop(true);
    }
  };

  const handleClick = () => {
    if (stop) {
      StartGame();
      SetAction("Draw Cards");
      return;
    }

    if (inRound) {
      cleanBeforeRound();
      SetAction("Draw Cards");
    } else {
      flipCards();
      SetAction("Clean Table");
    }
  };

  return (
    <div className="Table">
      <div className="Field">
        <h1>War Room</h1>
        <div className="ScoreField">
          <div className="userScore">
            <p>Player</p>
            <p className="score">{playerDeckNumber}</p>
          </div>
          <div className="computerScore">
            <p>Computer</p>
            <p className="score">{computerDeckNumber}</p>
          </div>
        </div>
        <div className="GameField">
          {playerCardSlot}
          {computerCardSlot}
        </div>
        <div className="result">
          <p>{text}</p>
        </div>
        <div className="GameField">
          <Card image={CoverR} />
          <Card image={CoverB} />
        </div>
        <button onClick={handleClick}>{action}</button>
      </div>
    </div>
  );
}

export default Table;
