import { ReactNode } from "react";

interface ProgramsProps {
    programsData: {
      id: number;
      area: string;
      name: string;
      specialization: string;
      country: string;
      institution: string;
      location: string;
      startDates: string;
      duration: string;
      costPerYearUSD: string;
      costPerYearCurrency: string;
      currency: string;
      scholarships: string;
      link: string;
      notes: string;
      images: {
        area: string;
        country: string;
        institution: string;
      };
    }[];
  }
  