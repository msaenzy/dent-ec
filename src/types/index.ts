export interface TreatmentItem {
  id: string;
  name: string;
  description: string;
  category?: string;
  iconName: string;
  badge?: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  indexNumber: string;
}

export interface ClinicValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  content: string;
  author: string;
  tag: string;
  isHandwrittenNote?: boolean;
  isReservedPlaceholder?: boolean;
  rating?: number;
  date?: string;
}

export type TreatmentOption = 
  | 'Blanqueamiento dental'
  | 'Diseño de sonrisa'
  | 'Rehabilitación oral'
  | 'Implantes dentales'
  | 'Alineadores invisibles'
  | 'Cirugía oral'
  | 'Odontología general'
  | 'Otro';

export type SituationOption =
  | 'Quiero mejorar mi estética'
  | 'Tengo una molestia o dolor'
  | 'Ya tengo un diagnóstico y busco segunda opinión'
  | 'Busco rehabilitación oral completa';

export type ScheduleOption = 'Mañana' | 'Tarde';

export interface ContactFormData {
  nombre: string;
  tratamiento: TreatmentOption;
  situacion: SituationOption;
  horario: ScheduleOption;
}
