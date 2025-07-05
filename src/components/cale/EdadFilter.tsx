"use client"
import React from "react";

interface EdadFilterPromp{
    edades: string[];
    onEdadSelect: (edad: string) => void;
    onBack: () => void;
    edadSeleccionada?: string;
}

const EdadFilter: React.FC<EdadFilterPromp> = ({
    edades,
    onEdadSelect, 
    edadSeleccionada,
    onBack 
}) => {
    return (
        <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-wrap justify-center gap-4 p-6">
                {edades.map((edad)=>(
                    <button
                    key={edad}
                    onClick={() => onEdadSelect(edad)}
                    className={`px-6 py-2 rounded-full font-semibold border transition ${edad === edadSeleccionada? "bg-blue-600 text-white border-blue-600": "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
                }`}>
                    {edad}
                </button>
                ))}
            </div>
            
            <div className="felx justify-start">
                <button
                    onClick={onBack}
                    className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
                >
                    Volver a categorías
                </button>
            </div>
        </div>
    );
};

export default EdadFilter;