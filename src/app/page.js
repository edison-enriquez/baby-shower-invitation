'use client';

import React, { useState } from 'react';
import DraggableBackgroundImage from '@/components/ui/DraggableBackgroundImage';
import MovingCloud from '@/components/ui/MovingCloud';

const BalloonLetter = ({ letter, delay = 0 }) => (
  <div
    className="inline-block relative animate-float"
    style={{
      animationDelay: `${delay}s`,
      filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
    }}
  >
    <svg viewBox="0 0 100 140" className="w-[11vw] h-[15vw] sm:w-12 sm:h-16 md:w-16 md:h-20">
      <path
        d="M50,100 Q90,100 90,50 Q90,10 50,10 Q10,10 10,50 Q10,100 50,100 Z"
        fill="#FFB6C1"
        stroke="#D4A0A7"
        strokeWidth="3"
      />
      <path
        d="M50,100 Q45,110 50,120 Q55,130 50,140"
        fill="none"
        stroke="#D4A0A7"
        strokeWidth="4"
      />
      <text
        x="50"
        y="75"
        textAnchor="middle"
        fill="#FFF"
        fontSize="68"
        fontWeight="bold"
        fontFamily="Kidsbee"
      >
        {letter}
      </text>
    </svg>
  </div>
);

const BalloonName = ({ name }) => (
  <div className="flex justify-center items-center space-x-2 sm:space-x-2 my-4 sm:my-8 scale-110 sm:scale-100">
    {name.split('').map((letter, index) => (
      <BalloonLetter key={index} letter={letter} delay={index * 0.2} />
    ))}
  </div>
);

const MainInvitation = () => (
  <div className="bg-pink-100 backdrop-blur-sm p-3 sm:p-4 text-center shadow-xl rounded-lg w-[95vw] sm:w-full max-w-lg mx-auto relative h-[85vh] sm:h-[90vh]">
    {/* Cigüeña */}
    <DraggableBackgroundImage
      src="/images/stork.svg"
      alt="stork"
      style={{ 
        width: 'clamp(60px, 12vh, 180px)', 
        height: 'clamp(60px, 12vh, 180px)' 
      }}
      className="absolute top-[-2vh] right-[2vh] sm:right-auto sm:left-[5vh] sm:top-[4vh]"
    />

    {/* Nubes */}
    <MovingCloud
      src="/images/cloud.svg"
      alt="Nube 1"
      className="w-[12vh] h-[6vh] sm:w-[15vh] sm:h-[8vh] top-[20vh]"
      limits={{ start: -10, end: 250 }}
      speed={0.09}
    />

    <MovingCloud
      src="/images/cloud2.svg"
      alt="Nube 2"
      className="w-[14vh] h-[7vh] sm:w-[18vh] sm:h-[10vh] top-[26vh]"
      limits={{ start: -10, end: 250 }}
      speed={0.2}
    />


    {/* Contenido principal */}
    <div className="relative pt-[12vh] sm:pt-[12vh]">
      <div className="text-[8vh] sm:text-[10vh] font-bubble text-rose-500 leading-none">
        BABY
        <div className="text-[8vh] sm:text-[10vh] font-bubble text-rose-400 -mt-[1vh]">
          SHOWER
        </div>
      </div>

      <div className="text-[3.5vh] sm:text-[3vh] font-girl1 text-rose-900 pt-[4vh]" 
          style={{ textShadow: "2px 2px 0px white, -2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 0px 2px 0px white, 0px -2px 0px white, 2px 0px 0px white, -2px 0px 0px white" }}>
        Yuli y Edison
      </div>
      <div className="text-[2.5vh] sm:text-[3vh] font-girl text-rose-500 pt-[2vh]" 
          style={{ textShadow: "2px 2px 0px white, -2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 0px 2px 0px white, 0px -2px 0px white, 2px 0px 0px white, -2px 0px 0px white" }}>
        e invitamos a Celebra
        <div className="mt-[0.5vh] font-girl1 text-rose-500"
            style={{ textShadow: "2px 2px 0px white, -2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 0px 2px 0px white, 0px -2px 0px white, 2px 0px 0px white, -2px 0px 0px white" }}>
          L&#xf038;llegad&#xf038;d&#xf03c;nuestr&#xf038;princesa
        </div>
      </div>

      <BalloonName name="SALOMÉ" />

      <div className="mt-[1vh] space-y-[0.5vh] text-amber-900">
        <div>
          <span className="text-[3vh] sm:text-[4vh] font-girl1">Sábado</span>
          <span className="mx-[1vh] text-[3vh] sm:text-[4vh] font-girl1">4</span>
          <span className="text-[3vh] sm:text-[4vh] font-girl1">Enero</span>
        </div>
        <div className="text-[2.5vh] sm:text-[3vh] font-girl1">2025</div>
        <div className="text-[2.5vh] sm:text-[3vh] mt-[1vh] font-girl1"> 5:00 PM <br /></div>
      </div>

      <div className="mt-[1vh] text-[2vh] sm:text-[2.5vh] text-amber-900 font-girl2">
        <div>Santa Eucaristía<br />Calle 4 # 1 - 27 <br /> Barrio San Jose,<br /> Gualmatán</div>
      </div>
    </div>

    {/* Grupo del botón con animales */}
    <div className="absolute bottom-10 left-0 right-0 h-[22vh] sm:h-[30vh]">
      {/* Jirafa */}
      <DraggableBackgroundImage
        src="/images/giraffe.svg"
        alt="Jirafa"
        style={{ 
          width: 'clamp(100px, 18vh, 250px)', 
          height: 'clamp(100px, 18vh, 250px)' 
        }}
        className="absolute bottom-[0vh] left-[-3vh] sm:left-[8vh]"
      />

      {/* Gato */}
      <DraggableBackgroundImage
        src="/images/babyCat.svg"
        alt="babyCat"
        style={{ 
          width: 'clamp(120px, 20vh, 280px)', 
          height: 'clamp(120px, 20vh, 280px)' 
        }}
        className="absolute bottom-[4vh] right-[-35vh] sm:right-[-40vh]"
      />

      {/* Botón */}
      {/**<button className="absolute bottom-[2vh] left-1/2 -translate-x-1/2 bg-rose-400 hover:bg-rose-500 text-white px-[2vh] sm:px-[3vh] py-[1vh] rounded-lg text-[2vh] sm:text-[2.5vh] font-girl"> Gracias por su
        Asistencia
      </button>*/}
    </div>
  </div>
);

const BabyShowerInvitation = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-white to-pink-50 p-2 flex items-center justify-center overflow-hidden">
      <MainInvitation />
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BabyShowerInvitation;