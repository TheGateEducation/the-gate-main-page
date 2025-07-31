"use client";
import React from "react";

interface TextoInformativoProps {
  texto: string;
}


const TextoInformativo: React.FC<TextoInformativoProps> = ({ texto }) => {
  return (
    <div className="flex flex-col items-center p-6">
        <p className="text-3xl max-w-3xl text-center whitespace-pre-line mb-6"><strong>{texto}</strong></p>
    </div>
  );
};

export default TextoInformativo;
