import { useState, useRef} from "react";
import panda from "../assets/panda.png";
import pig from "../assets/pig.png";
import hippo from "../assets/hippo.png";
import snake from "../assets/snake.png";
import dark from "../assets/dark.png";

export const MemoryGame = () => {
  const imageRef = useRef([]);
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')

  const ValidPairs = []
  
  const images = [
    {
      id: 'panda',
      backCard: dark,
      image: panda,
    },
    {
      id: 'pig',
      backCard: dark,
      image: pig,
    },
    {
      id: 'hippo',
      backCard: dark,
      image: hippo,
    },
    {
      id: 'snake',
      backCard: dark,
      image: snake,
    },
  ];

  function popUp(message) {
    setMessage(message)
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
      setMessage('')
    }, 2000)
  } 

  const displayCard = (image, prefix) => {
    imageRef.current.push(image);
    const cardRef = imageRef.current[prefix + image.id]
    if(cardRef) {
      cardRef.src = image.image
    }
    
    if (imageRef.current.length >= 2) {
        const firstImage = imageRef.current[0];
        const secondImage = imageRef.current[1];
        
        if (firstImage.id === secondImage.id) {
          popUp('Bravo !')
        } else {
          popUp('Oups..')
        }
    }
};

 

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
          {images.map((image, index) => (
            <img
              key={index}
              ref={(el) => (imageRef.current['top_' + image.id] = el)}
              src={image.backCard}
              onClick={() => displayCard(image, 'top_')}
              className="w-40 h-full max-w-[300px] object-cover cursor-pointer"
              alt=""
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-8">
          {images.map((image, index) => (
            <img
              key={index}
              ref={(el) => (imageRef.current['bottom_' + image.id] = el)}
              onClick={() => displayCard(image, 'bottom_')}
              className="w-40 h-full max-w-[300px] object-cover cursor-pointer"
              src={image.backCard}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};
