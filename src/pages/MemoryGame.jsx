import { useState, useRef } from "react";
import panda from "../assets/panda.png";
import pig from "../assets/pig.png";
import hippo from "../assets/hippo.png";
import snake from "../assets/snake.png";
import dark from "../assets/dark.png";

export const MemoryGame = () => {
  const imageRefs = useRef([]);
  
  const images = [
    {
      backCard: dark,
      image: panda,
    },
    {
      backCard: dark,
      image: pig,
    },
    {
      backCard: dark,
      image: hippo,
    },
    {
      backCard: dark,
      image: snake,
    },
  ];


  const returnCard = (index, image, source) => {
    
    if (source === 'top' && imageRefs.current[index + 'top']) {
      imageRefs.current[index + 'top'].src = image
    }
    else if (source === 'bottom' && imageRefs.current[index + 'bottom']) {
      imageRefs.current[index + 'bottom'].src = image
    }
  };

  return (
    <div className="border-4 min-screen w-10/12">
      <div className="text-center text-white flex flex-col gap-5">
        <h1 className="text-5xl">Memory Game 🃏</h1>
        <h2 className="text-4xl">Try to win !</h2>
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <div className="flex items-center justify-center gap-8 mt-10">
          {images.map((image, index) => (
            <img
              key={index}
              ref={(el) => (imageRefs.current[index + 'top'] = el)}
              src={image.backCard}
              onClick={() => returnCard(index, image.image, 'top')}
              className="w-40 h-full max-w-[300px] object-cover cursor-pointer"
              alt=""
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-8">
          {images.map((image, index) => (
            <img
              key={index}
              ref={(el) => (imageRefs.current[index + 'bottom'] = el)}
              onClick={() => returnCard(index, image.image, 'bottom')}
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
