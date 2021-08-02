import React, { useState } from "react";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import GameCard from '../gameCard/GameCard';
import { SCREENS } from "../../components/responsive";
import Spades from '../../assets/images/spade.png';
import './games.css';

function Games() {
    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  
    const game1 = {
      name: "War",
      thumbnailSrc:"https://images.squarespace-cdn.com/content/v1/59ea6080a803bb2f70ecbae5/1529350132152-VWJ0NHRKGK1NJGMR6PDW/AdditionWar3BetterThanHomework.jpg",
      description:
        "The objective of the game is to win all of the cards.Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.",
        war: true
    };
  
    const game2 = {
      name: "Poker",
      thumbnailSrc:"https://www.liveabout.com/thmb/9FBZFQ2atWrXadtkxbCRRWqjVig=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-102284680-5a2090ed89eacc00373e0c17.jpg",
      description:
        "Poker is a competitive card game in which players bet against each other as to who has the better card combination (“hand”). The winner is either the player who holds the hand with the highest value, or the player who successfully bluffs the other players out of the hand",
    };
  
    const game3 = {
      name: "Blackjack",
      thumbnailSrc:"https://images.covers.com/editorial/2012/383x165/vegas_blackjack071816.jpg",
      description:
        "Blackjack is a card game that pits player versus dealer.The object of the game is to win money by creating card totals higher than those of the dealer's hand but not exceeding 21",
    };
  
    const game4 = {
      name: "Roulette",
      thumbnailSrc:"https://www.gamblingsites.org/wp-content/uploads/2019/09/roulette-like-pro.jpg",
      description:
        "Roulette, (from French: “small wheel”), gambling game in which players bet on which red or black numbered compartment of a revolving wheel a small ball (spun in the opposite direction) will come to rest within.",
    };
  
    const services = [
      <GameCard {...game1} />,
      <GameCard {...game2} />,
      <GameCard {...game3} />,
      <GameCard {...game4} />,
    ];
    const numberOfDots = isMobile
      ? services.length
      : Math.ceil(services.length / 3);
    return (
        <div className="Games" id="games">
            <div className="gamesTitle">
              <img src={Spades} alt="spades card" />
              <h2><span>E</span>xplore Our Games</h2>
            </div>
            <div className="ServicesContainer">
            <Carousel
          value={current}
          onChange={setCurrent}
          slides={services}
          plugins={[
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
            </div>
        </div>
    )
}

export default Games
