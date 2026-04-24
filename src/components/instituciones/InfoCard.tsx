// /components/InfoCard.tsx

import React from 'react';

interface InfoCardProps {
  title: string;
  borderColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, borderColor }) => {
  return (
    <div
      className="flex w-full items-center rounded-2xl border-l-[6px] border-y border-r border-gray-100 bg-white px-6 py-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 min-h-[100px]"
      style={{ borderLeftColor: borderColor }}
    >
      <h3 className="font-poppins text-lg md:text-xl font-bold text-gray-900 leading-snug">
        {title}
      </h3>
    </div>
  );
};

export default InfoCard;