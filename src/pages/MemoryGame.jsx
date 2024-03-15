import { useState, useRef} from "react";
import panda from "../assets/panda.png";
import pig from "../assets/pig.png";
import hippo from "../assets/hippo.png";
import snake from "../assets/snake.png";
import backCard from "../assets/dark.png";
import { replicateArray } from "../utils/array";

export const MemoryGame = () => {
  
  const availableCards = [
    {
      id: 'panda',
      image: panda,
    },
    {
      id: 'pig',
      image: pig,
    },
    {
      id: 'hippo',
      image: hippo,
    },
    {
      id: 'snake',
      image: snake,
    },
  ];


  const [gameCards, setGameCards] = useState(replicateArray(availableCards, 2).map((card) => {
    
    const gameCard = {
      
      flipped: false,
      card: card
    }
    return gameCard
  }))

  console.log(gameCards)
  
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')

  
  function flipCard(gamecard) {
    gamecard.flipped = !gamecard.flipped
    setGameCards([...gameCards])
  }


  // function popUp(message) {
  //   setMessage(message)
  //   setShowMessage(true)
  //   setTimeout(() => {
  //     setShowMessage(false)
  //     setMessage('')
  //   }, 2000)
  // } 

  

  return (
    <div className="min-screen w-10/12">
      <div className="text-center text-white flex flex-col gap-5">
        <h1 className="text-5xl">Memory Game 🃏</h1>
        <h2 className="text-4xl">Try to win !</h2>
      </div>
      <div className={` text-white text-3xl text-center mt-10 display${showMessage ? ' block' : ' none'}`} style={{ height: '50px' }}>
        {showMessage && <p>{message}</p>}
      </div>
      <div className="flex flex-col gap-10 mt-8">
        <div className="flex items-center justify-center gap-8 mt-10">
          {gameCards.map((gamecard, index) => (
            <img
              key={index}
              src={gamecard.flipped ? gamecard.card.image : backCard }
              onClick={() => flipCard(gamecard)}
              className="w-40 h-full max-w-[300px] object-cover cursor-pointer"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};
