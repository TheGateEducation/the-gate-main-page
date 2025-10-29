"use client";

import React from 'react';
import CountUp from 'react-countup';

type StatItem = {
    end: number;
    label: string;
    prefix?: string;
    suffix?: string;
};

// You can replace this with your actual data import
const statsData: StatItem[] = [
    {
        prefix: '+',
        end: 15,
        label: 'países',
    },
    {
        prefix: '+',
        end: 300,
        label: 'instituciones\neducativas',
    },
    {
        prefix: '+',
        end: 1000,
        label: 'programas',
    },
    {
        end: 98,
        suffix: '%',
        label: 'aceptación',
    },
];

const Statistics: React.FC = () => {
    return (
        <div className="bg-[#5F338B] w-full text-white">
            {/* Header Section */}
            <div className="flex flex-row justify-center items-center px-4 py-12 md:py-16 lg:py-22">
                <h2 className="font-poppins font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[48px] text-center max-w-[933px]">
                    Estudiar en el extranjero es solo el comienzo.
                    <br />
                    En The GATE Education, te ayudamos a cruzar esa puerta.
                </h2>
            </div>

            {/* Statistics Section */}
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-12 lg:gap-12 px-4 md:px-20 lg:px-[137px] pb-12 md:pb-16 lg:pb-[60px]">
                {statsData.map(({ end, label, prefix = '', suffix = '' }, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center justify-center pt-6 gap-5 w-full md:w-auto"
                    >
                        {/* Number with CountUp */}
                        <CountUp start={0} end={end} duration={2.5} delay={0}>
                            {({ countUpRef }) => (
                                <div className="font-poppins font-semibold text-7xl md:text-8xl lg:text-[90px] leading-[100%] tracking-[-0.02em] text-white text-center">
                                    {prefix}
                                    <span ref={countUpRef} />
                                    {suffix}
                                </div>
                            )}
                        </CountUp>
                        
                        {/* Label */}
                        <p className="font-poppins font-normal text-base md:text-lg text-white text-center whitespace-pre-line">
                            {label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;