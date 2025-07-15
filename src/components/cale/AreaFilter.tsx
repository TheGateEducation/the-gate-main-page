"use client"
import React from "react";

interface AreaFilterPromp{
    areas: string[];
    onAreaSelect: (area: string) => void;
    areaSeleccionada?: string;
}

const AreaFilter: React.FC<AreaFilterPromp> = ({
    areas,
    onAreaSelect,
    areaSeleccionada
}) => {
    return(
        <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-wrap justify-center gap-4 p-6">
                {areas.map((area) => (
                    <button
                    key={area}
                    onClick={()=>onAreaSelect(area)}
                    className={`px-6 py-2 rounded-full font-semibold border transition ${area === areaSeleccionada? "bg-blue-600 text-white border-blue-600": "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"}`}
                    >
                        {area}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AreaFilter;