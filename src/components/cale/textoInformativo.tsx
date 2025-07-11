"use client";
import React from "react";

import {
  FaWhatsapp
} from "react-icons/fa6";

interface TextoInformativoProps {
  texto: string;
  onBack: () => void;
}


const TextoInformativo: React.FC<TextoInformativoProps> = ({ texto, onBack }) => {
  return (
    <div className="flex flex-col items-center p-6">

        <p className="text-lg max-w-3xl text-center">{texto}</p>

        <button
          onClick={onBack}
          className="mt-20 text-sm px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
        >
          Volver a categorías
        </button>

        <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition mt-10"
        >
            Contáctanos
        </a>
        <a
            href="http://wa.me/528443510141"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition mt-10"
        >
            <FaWhatsapp className="text-lg" />
            WhatsApp
        </a>
    </div>
  );
};

export default TextoInformativo;
