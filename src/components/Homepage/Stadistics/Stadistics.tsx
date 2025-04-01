"use client";

import React from 'react';
import CountUp from 'react-countup';
import data from '../../../../database/home/homePage.json'; 

type StatItem = {
    end: number;
    label: string;
    prefix?: string;
    suffix?: string;
    isPercentage?: boolean;
};

const Statistics: React.FC = () => {
    return (
        <div className="bg-[#6a3392] py-20 text-white text-center">
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 py-[40px]">
                {(data.stats as StatItem[]).map(({ end, label, prefix = '', suffix = '', isPercentage = false }, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <CountUp start={0} end={end} duration={4} delay={0}>
                            {({ countUpRef }) => (
                                <div className="text-8xl font-bold">
                                    <span className="text-7xl">{prefix}</span>
                                    <span ref={countUpRef} />
                                    <span className="text-7xl">{suffix}</span>
                                </div>
                            )}
                        </CountUp>
                        <p className="mt-2 text-lg">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
