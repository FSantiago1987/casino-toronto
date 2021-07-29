import React from "react";
import Card from "../card/Card";

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

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }
  get numberOfCards() {
    return this.cards.length;
  };
  pop() {
    return this.cards.shift();
  };
  push(card)  {
    this.cards.push(card);
  };
  shuffle() {
    for (let count = this.numberOfCards - 1; count > 0; count--) {
      const newIndex = Math.floor(Math.random() * (count + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[count];
      this.cards[count] = oldValue;
    }
  };
}

class GenerateCards {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
  get color() {
    return this.suit === "♣" || this.suit === "♠" ? "black" : "red";
  };

  createCard()  {
    return <Card suits={this.suit} value={this.value} color={this.color} />;
  };
}

function freshDeck() {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new GenerateCards(suit, value);
    });
  });
}
