'use client';

import React, { useState } from 'react';

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
        strokeWidth="2"
      />
      <path
        d="M50,100 Q45,110 50,120 Q55,130 50,140"
        fill="none"
        stroke="#D4A0A7"
        strokeWidth="2"
      />
      <text
        x="50"
        y="65"
        textAnchor="middle"
        fill="#FFF"
        fontSize="35"
        fontWeight="bold"
        fontFamily="Arial"
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
  <div className="bg-white/90 backdrop-blur-sm p-8 text-center space-y-6 shadow-xl rounded-lg max-w-lg mx-auto">
    <div className="text-5xl font-bold text-rose-500">
      BABY
      <div className="text-6xl mt-2 font-script text-rose-400">shower</div>
    </div>

    <div className="mt-4 text-lg text-amber-900">
      TE INVITAMOS A CELEBRAR
      <div className="mt-2">LA LLEGADA DE NUESTRA PRINCESA</div>
    </div>

    <BalloonName name="SALOMÉ" />

    <div className="mt-4 space-y-2 text-amber-900">
      <div className="text-xl">
        <span className="font-semibold">SÁBADO</span>
        <span className="mx-4 text-2xl">15</span>
        <span className="font-semibold">ENERO</span>
      </div>
      <div className="text-xl">2025</div>
      <div className="text-xl mt-4">3:00 PM</div>
    </div>

    <div className="mt-6 text-lg text-amber-900">
      <div>SALÓN DE EVENTOS "EL JARDÍN"</div>
      <div>Av. Principal 123, Ciudad Jardín</div>
    </div>

    <div className="mt-6">
      <button className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-lg text-lg">
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
