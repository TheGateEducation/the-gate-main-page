// /components/InfoCard.tsx

import React from 'react';

interface InfoCardProps {
  title: string;
  borderColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, borderColor }) => {
  return (
    <div
      className="
        flex w-full items-center rounded-2xl border-4 
        bg-white px-6 py-10 shadow-md transition-transform duration-300 hover:scale-105
        min-h-[120px] 
      "
      // El estilo para el borde dinámico se mantiene igual, ¡esto ya estaba bien!
      style={{ borderColor: borderColor }} 
    >
      {/* Título de la tarjeta (cambiamos a texto oscuro) */}
      <h3 className="font-poppins text-2xl font-bold text-black">
        {title}
      </h3>
    </div>
  );
};

export default InfoCard;