import React from 'react';
import { Inter } from 'next/font/google';

import Hero from '@src/components/Homepage/Hero/Hero';
import AboutUs from '@src/components/Homepage/About/About';
import Stadistics from '@src/components/Homepage/Stadistics/Stadistics';
import HeretoHelp from '@src/components/Homepage/About/HereToHelp';
import MeetTeam from '@src/components/Homepage/MeetTeam/MeetTeam';
import Questions from '@src/components/Homepage/Stadistics/Questions';
import Safeway from '@src/components/Homepage/SafeWay/Safeway';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
    return (
        <main>
            <Hero />
            <AboutUs />
            <Stadistics />
            <Safeway />
            <HeretoHelp />
            <Questions />
        </main>
    );
}