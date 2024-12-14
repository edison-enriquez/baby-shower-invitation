import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BalloonLetter = ({ letter, delay = 0 }) => (
  <div 
    className="inline-block relative animate-float"
    style={{ 
      animationDelay: `${delay}s`,
      filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
    }}
  >
    <svg viewBox="0 0 100 140" className="w-16 h-20 md:w-20 md:h-24">
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
        fontSize="45"
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

const MainInvitation = ({ onViewGuests }) => (
  <Card className="bg-white/90 backdrop-blur-sm p-8 text-center space-y-6 shadow-xl">
    <div className="text-5xl font-bold text-rose-400">
      BABY
      <div className="text-6xl mt-2 font-script">
        shower
      </div>
    </div>

    {/* Imagen del conejito */}
    <div className="relative w-48 h-48 mx-auto my-6 animate-float">
      <img 
        src="/api/placeholder/200/200" 
        alt="Conejito con flor y mariposa"
        className="w-full h-full object-contain"
      />
    </div>

    <div className="mt-4 text-lg text-amber-900">
      TE INVITAMOS A CELEBRAR
      <div className="mt-2">
        LA LLEGADA DE NUESTRA PRINCESA
      </div>
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
      <Button 
        onClick={onViewGuests}
        className="bg-rose-400 hover:bg-rose-500 text-white"
      >
        Confirmar Asistencia
      </Button>
    </div>
  </Card>
);

const GuestList = ({ onBack }) => {
  const [guests] = useState([
    { id: 1, name: 'Ana García', confirmed: true },
    { id: 2, name: 'Carlos Pérez', confirmed: true },
    { id: 3, name: 'María Rodríguez', confirmed: true }
  ]);

  return (
    <Card className="bg-white/90 backdrop-blur-sm p-6">
      <h2 className="text-2xl font-bold text-rose-400 text-center mb-6">
        Invitados Confirmados
      </h2>
      <div className="space-y-3">
        {guests.map(guest => (
          <div key={guest.id} className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
            <span className="text-amber-900">{guest.name}</span>
            <span className="text-emerald-600 text-sm font-medium">Confirmado</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button 
          variant="outline" 
          className="text-rose-400 hover:text-rose-500"
          onClick={onBack}
        >
          Volver a la invitación
        </Button>
      </div>
    </Card>
  );
};

const BabyShowerInvitation = () => {
  const [currentView, setCurrentView] = useState('main');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 p-8 relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        {currentView === 'main' ? (
          <MainInvitation onViewGuests={() => setCurrentView('guests')} />
        ) : (
          <GuestList onBack={() => setCurrentView('main')} />
        )}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BabyShowerInvitation;