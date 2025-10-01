// src/components/SummaryCard.tsx
"use client";
import React from 'react';

// Definimos la estructura de un servicio para usarla en varios sitios
interface Service {
  id: number;
  title: string;
  price: number; 
}

interface SummaryCardProps {
  selectedServices: Service[];
}

const SummaryCard: React.FC<SummaryCardProps> = ({ selectedServices }) => {
  // Calculamos el total sumando los precios de los servicios seleccionados
  const total = selectedServices.reduce((sum, service) => sum + service.price, 0);

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <div className="flex justify-between border-b pb-4">
        <span className="text-gray-500">Subtotal:</span>
        {/* toLocaleString da formato de moneda local */}
        <span className="font-bold text-black">${total.toLocaleString('en-US')} USD</span>
      </div>
      <div className="mt-4 flex justify-between">
        <span className="text-xl font-bold text-black">Total:</span>
        <span className="text-xl font-bold text-black">${total.toLocaleString('en-US')} USD</span>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-gray-600">Total de Servicio Seleccionados: {selectedServices.length}</h3>
        <ul className="mt-4 space-y-2">
          {selectedServices.map((service) => (
            <li key={service.id} className="text-gray-800">
              {service.title}
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-8 w-full rounded-lg border border-gray-300 py-3 text-center font-semibold text-gray-800 transition hover:bg-gray-50">
        Ir a Pagar
      </button>
    </div>
  );
};

export default SummaryCard;