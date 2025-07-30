interface ProgramArea {
  area: string;
  moneda: string;
  duracion: string;
  ubicacion: string;
  areaDeEspecializacion?: string;
  costo: number;
  costoUSD?: number;
  profesiones?: string; 
  nombre: string;
  institucion: string;
  link: string;
  pais: string;
  fechas: string;
  notas?: string; 
  id: number;
}

export interface ProgramCardsPropsArea {
  programs: ProgramArea[];
  onReset: () => void;
  showEmpty: boolean; 
}