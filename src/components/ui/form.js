'use client';

import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase'; // Importa la configuración de Firebase

const ConfirmationForm = () => {
  const [name, setName] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  // Verifica si el usuario ya confirmó
  useEffect(() => {
    const checkConfirmation = async () => {
      const docRef = doc(db, 'guests', 'user_confirmation'); // Cambia "user_confirmation" por un identificador único
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setConfirmed(true);
      }
    };

    checkConfirmation();
  }, []);

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return alert('Por favor, ingresa tu nombre.');

    try {
      await setDoc(doc(db, 'guests', 'user_confirmation'), {
        name,
        confirmed: true,
      });
      setConfirmed(true);
    } catch (error) {
      console.error('Error al guardar la confirmación:', error);
    }
  };

  return (
    <div className="text-center mt-6">
      {confirmed ? (
        <p className="text-green-500 font-bold">
          ¡Gracias, {name || 'Invitado'}, por confirmar tu asistencia!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <button
            type="submit"
            className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-lg"
          >
            Confirmar Asistencia
          </button>
        </form>
      )}
    </div>
  );
};

export default ConfirmationForm;
