import React from 'react';
import { Inter } from 'next/font/google';

import Hero from '@src/components/Hero/Hero';
import Stadistics from '@src/components/Homepage/Stadistics/Stadistics';
import MeetTeam from '@src/components/Homepage/MeetTeam/MeetTeam';
import MissionVision from '@src/components/Homepage/MissionVision/missionvision';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
    return (
        <main>
            <Hero 
                title="Donde hay una puerta abierta, hay un mundo por descubrir" 
            />
            <Stadistics />
            <MeetTeam />
            <MissionVision/>
        </main>
    );
}