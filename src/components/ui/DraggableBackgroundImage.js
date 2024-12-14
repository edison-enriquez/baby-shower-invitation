'use client';

import React, { useState } from 'react';

const DraggableBackgroundImage = ({
  src,
  alt,
  defaultPosition = { x: 0, y: 0 },
  className = '',
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition((prev) => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY,
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseOverOrClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000); // Duración de la animación (1 segundo)
    }
  };

  return (
    <div
      className={`absolute ${className} ${isAnimating ? 'animate-bounce-twice' : ''}`}
      style={{
        top: position.y,
        left: position.x,
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: -1, // Mantiene el elemento detrás
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseOver={handleMouseOverOrClick} // Activa animación al pasar el mouse
      onClick={handleMouseOverOrClick} // Activa animación al hacer clic
    >
      <img src={src} alt={alt} className="w-full h-full opacity-80" draggable={false} />
    </div>
  );
};

export default DraggableBackgroundImage;
