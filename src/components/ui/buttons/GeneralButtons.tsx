import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

interface ButtonProps {
    onBack: () => void; 
}
//bg-green-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition text-sm
const GeneralButtons: React.FC<ButtonProps> = ({ onBack }) =>{
    return(
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-8">
          <button
            onClick={onBack}
            className="px-6 py-2 rounded-lg bg-[#5F338B] text-white hover:bg-[#4b2870]"
          >
            Volver a categorías
          </button>

          <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-[#5F338B] text-white hover:bg-[#4b2870]"
          >
              Contáctanos
          </a>
          <a
              href="http://wa.me/528443510141"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center hover:bg-green-600"
          >
              <FaWhatsapp className="text-lg" />
              WhatsApp
          </a>
      </div>
    );
};

export default GeneralButtons;