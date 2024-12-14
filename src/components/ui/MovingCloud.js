'use client';

import React, { useState, useEffect } from 'react';

const MovingCloud = ({
  src,
  alt,
  className = '',
  style = {},
  limits = { start: 0, end: 1000 },
  speed = 2,
}) => {
  const [position, setPosition] = useState(limits.start); // Comienza desde el límite inicial
  const [direction, setDirection] = useState(1); // 1: derecha, -1: izquierda

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const nextPosition = prev + direction * speed;

        // Cambia de dirección si llega al límite derecho o izquierdo
        if (nextPosition >= limits.end) {
          setDirection(-1); // Cambia a moverse hacia la izquierda
        } else if (nextPosition <= limits.start) {
          setDirection(1); // Cambia a moverse hacia la derecha
        }

        return nextPosition;
      });
    }, 20); // Intervalo de actualización de posición (más pequeño = más suave)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [direction, limits, speed]);

  return (
    <div
      className={`absolute ${className}`}
      style={{
        transform: `translateX(${position}px)`,
        zIndex: -1, // Asegura que esté detrás del contenido
        ...style,
      }}
    >
      <img src={src} alt={alt} className="w-full h-full opacity-30" draggable={false} />
    </div>
  );
};

export default MovingCloud;
