import React from "react";

import Hero from "@src/components/Hero/Hero";
import Destinations from "@src/components/Homepage/Destinations/Destinations";
import Programs from "@src/components/Homepage/Programs/Programs";
import Stadistics from "@src/components/Homepage/Stadistics/Stadistics";
import MeetTeam from "@src/components/Homepage/MeetTeam/MeetTeam";
import MissionVision from "@src/components/Homepage/MissionVision/missionvision";
import CTASection from "@src/components/Homepage/CTA/CTASection";

export default function Page() {
  return (
    <main>
      <Hero
        title="Donde hay una puerta abierta, hay un mundo por descubrir"
        titleType="gradient"
        subtitle="Te acompanamos a hacer realidad tu sueno de educacion internacional con asesoria personalizada y programas en mas de 15 paises."
        showCTA
        fullHeight
      />
      <Destinations />
      <Programs />
      <Stadistics />
      <MeetTeam />
      <MissionVision />
      <CTASection />
    </main>
  );
}
