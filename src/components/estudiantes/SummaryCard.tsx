"use client";
import React from 'react';

// La interfaz no cambia
interface Service {
  id: number;
  title: string;
  price: number; 
}

interface SummaryCardProps {
  selectedServices: Service[];
}

const SummaryCard: React.FC<SummaryCardProps> = ({ selectedServices }) => {
  // El cálculo del total sigue igual
  const total = selectedServices.reduce((sum, service) => sum + service.price, 0);

  // 1. Creamos la URL dinámica de PayPal.
  //    Usamos template literals para insertar el total al final.
  const paypalLink = `https://paypal.me/TheGateEducation/${total}`;

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <div className="flex justify-between border-b pb-4">
        <span className="text-gray-500">Subtotal:</span>
        <span className="font-bold text-black">${total.toLocaleString('en-US')} USD</span>
      </div>
      <div className="mt-4 flex justify-between">
        <span className="text-xl font-bold text-black">Total:</span>
        <span className="text-xl font-bold text-black">${total.toLocaleString('en-US')} USD</span>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-gray-600">Total de Servicios Seleccionados: {selectedServices.length}</h3>
        <ul className="mt-4 space-y-2">
          {selectedServices.map((service) => (
            <li key={service.id} className="text-gray-800">
              {service.title}
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Reemplazamos el <button> por una etiqueta <a> */}
      {/* Le aplicamos los mismos estilos para que se vea igual. */}
      <a 
        href={total > 0 ? paypalLink : '#'} // El enlace solo funciona si el total es mayor a 0
        target="_blank" // Abre PayPal en una nueva pestaña
        rel="noopener noreferrer" // Buena práctica de seguridad para enlaces externos
        className={`
          mt-8 block w-full rounded-lg border py-3 text-center font-semibold 
          transition
          ${total > 0 
            ? 'cursor-pointer border-green-500 bg-green-500 text-white hover:bg-green-600' 
            : 'cursor-not-allowed border-gray-300 bg-gray-200 text-gray-500'
          }
        `}
        // Prevenimos que el usuario haga clic si no hay nada que pagar
        onClick={(e) => { if (total === 0) e.preventDefault(); }}
      >
        {total > 0 ? 'Ir a Pagar con PayPal' : 'Selecciona un servicio'}
      </a>
    </div>
  );
};

export default SummaryCard;