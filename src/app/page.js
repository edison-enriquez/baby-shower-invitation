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
    <svg viewBox="0 0 100 140" className="w-12 h-16 md:w-16 md:h-20">
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
  <div className="flex justify-center items-center space-x-2 my-8">
    {name.split('').map((letter, index) => (
      <BalloonLetter key={index} letter={letter} delay={index * 0.2} />
    ))}
  </div>
);

const MainInvitation = () => (
  <div className="bg-pink-100 backdrop-blur-sm p-8 text-center space-y-6 shadow-xl rounded-lg max-w-lg mx-auto">
    <DraggableBackgroundImage
      src="/images/stork.svg"
      alt="stork"
      style={{ width: '300px', height: '300px' }}
      defaultPosition={{ x: 70, y: 200 }}
    />

    {/* Nube 1 */}
    <MovingCloud
        src="/images/cloud.svg"
        alt="Nube 1"
        className="w-40 h-24 top-0"
        limits={{ start: -10, end: 250 }}
        speed={0.09}
      />

      {/* Nube 2 */}
      <MovingCloud
        src="/images/cloud2.svg"
        alt="Nube 2"
        className="w-48 h-28 top-20"
        limits={{ start: -10, end: 250 }}
        speed={0.2}
      />
    {/* Nube 2 */}  
    <DraggableBackgroundImage
      src="/images/giraffe.svg"
      alt="Jirafa"
      style={{ width: '300px', height: '300px' }}
      defaultPosition={{ x: 10, y: 470 }}
    />
    <DraggableBackgroundImage
      src="/images/babyGoat.svg"
      alt="Ovejita"
      style={{ width: '400px', height: '400px' }}
      defaultPosition={{ x: 370, y: 560 }}
    />

    <DraggableBackgroundImage
      src="/images/star1.svg"
      alt="Star_1"
      style={{ width: '200px', height: '200px' }}
      defaultPosition={{ x: 40, y: 130 }}
    />

    <DraggableBackgroundImage
      src="/images/star2.svg"
      alt="Star_1"
      style={{ width: '200px', height: '200px' }}
          defaultPosition={{ x: 400, y: 230 }}
    />


    <div className="text-8xl font-bubble text-rose-500" translate="no">
      BABY
      <div className="text-9xl  font-bubble text-rose-400">
        shower
      </div>
    </div>

    <div className="text-2xl font-girl text-rose-500">
    e invitamos a Celebra
      <div className="mt-2 font-girl1 text-rose-500">L&#xf038;llegad&#xf038;d&#xf03c;nuestr&#xf038;princesa</div>
    </div>

    <BalloonName name="SALOMÉ" />

    <div className="mt-4 space-y-2 text-amber-900">
      <div className="text-xl">
        <span className="text-4xl font-girl1">Sábado</span>
        <span className="mx-4 text-4xl font-girl1">11</span>
        <span className="text-4xl font-girl1">Enero</span>
      </div>
      <div className="text-xl font-girl1">2025</div>
      <div className="text-xl mt-4 font-girl1">3:00 PM</div>
    </div>

    <div className="mt-6 text-lg text-amber-900 font-girl2">
      <div>Calle 9 # 39 Sur 67, Jamundí</div>
    </div>

    <div className="mt-6">
      <button className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-lg text-lg font-girl">
        Confirmar Asistencia
      </button>
    </div>
  </div>
);

const BabyShowerInvitation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 p-8 flex items-center justify-center">
      <MainInvitation />
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
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
