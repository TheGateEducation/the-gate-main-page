import React from "react";

interface MissionVisionCardProps {
    title: string;
    content: string;
    backgroundColor: string;
    borderColor: string;
    titlePosition: "left" | "right";
}

const MissionVisionCard: React.FC<MissionVisionCardProps> = ({
    title,
    content,
    backgroundColor,
    borderColor,
    titlePosition,
}) => {
    return (
        <div className="relative w-full flex flex-col items-center gap-4 md:gap-0">
            {/* Mobile: Title below card */}
            <div className="md:hidden w-full max-w-[400px] order-2">
                <div
                    className="px-6 py-4 rounded-3xl font-poppins font-semibold text-2xl text-center text-black shadow-md"
                    style={{ 
                        border: `5px solid ${borderColor}`,
                        backgroundColor: '#FFFFFF'
                    }}
                >
                    {title}
                </div>
            </div>

            {/* Content Card */}
            <div className="relative w-full flex justify-center order-1 md:order-none">
                <div
                    className="w-full max-w-[1000px] px-6 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 rounded-2xl md:rounded-3xl font-poppins font-normal text-base md:text-xl lg:text-2xl text-center text-black leading-relaxed md:leading-[39px]"
                    style={{
                        backgroundColor: backgroundColor,
                        border: `5px solid ${borderColor}`,
                    }}
                >
                    {content}
                </div>

                {/* Desktop: Title positioned below with offset to right or left */}
                <div 
                    className={`hidden md:block absolute -bottom-12 z-10 ${
                        titlePosition === "right" ? "right-0 translate-x-12 lg:translate-x-16" : "left-0 -translate-x-12 lg:-translate-x-16"
                    }`}
                >
                    <div
                        className="px-6 py-4 lg:px-8 lg:py-5 rounded-3xl font-poppins font-semibold text-3xl lg:text-[36px] text-center text-black shadow-lg w-[380px] lg:w-[463px]"
                        style={{ 
                            border: `5px solid ${borderColor}`,
                            backgroundColor: '#FFFFFF',
                        }}
                    >
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
};

const MissionVision = () => {
    const missionData = {
        title: "Nuestra Misión",
        content:
            "En The GATE Education creemos que cada sueño merece una oportunidad. Acompañamos a estudiantes a abrir la puerta a una educación internacional, guiándolos con experiencia y propósito.",
        backgroundColor: "#F7E7CE",
        borderColor: "#EDA74C",
        titlePosition: "right" as const,
    };

    const visionData = {
        title: "Nuestra Visión",
        content:
            "Ser la plataforma que conecta e inspira a estudiantes latinoamericanos a transformar su vida a través de la educación global, la diversidad y el impacto positivo.",
        backgroundColor: "#F1EDFA",
        borderColor: "#5F338B",
        titlePosition: "left" as const,
    };

    return (
        <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-20 lg:gap-24">
                {/* Mission Card */}
                <MissionVisionCard {...missionData} />

                {/* Vision Card */}
                <MissionVisionCard {...visionData} />
            </div>
        </section>
    );
};

export default MissionVision;