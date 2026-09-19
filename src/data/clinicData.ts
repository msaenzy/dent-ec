import { TreatmentItem, WhyUsItem, ClinicValue, TestimonialItem, TreatmentOption, SituationOption, ScheduleOption } from '../types';

export const CLINIC_CONFIG = {
  name: 'dent.ec',
  subtitle: 'Dent on Dents',
  doctorName: 'Dr. David Barrera',
  doctorTitle: 'Especialista en Rehabilitación Oral y Estética Dental',
  locationCity: 'Samborondón, Ecuador',
  exactAddressText: 'Av. Samborondón Km 1.5, Edificio Diana Quintana, Piso 2, Of. 204 — Samborondón, Ecuador',
  scheduleText: 'Lunes a Viernes: 09:00 a 19:00 | Sábados: 09:00 a 14:00 (Previa cita)',
  phoneDirect: '+593 99 456 7890',
  whatsappOfficialLink: 'https://wa.me/message/STPQCONAQKGEK1',
  googleMapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Samborond%C3%B3n+Km+1.5%2C+Samborond%C3%B3n%2C+Ecuador',
  instagramUrl: 'https://www.instagram.com/dent.ec/',
  threadsUrl: 'https://www.threads.net/@dent.ec',
  brandPromise: 'Tu sonrisa, diseñada digitalmente antes de tocar un solo diente.',
  subheadline: 'Odontología integral en Samborondón: rehabilitación oral, estética dental e implantes planificados con tecnología 3D, para resultados que se ven — y se sienten — naturales.',
};

export const WHY_US_CARDS: WhyUsItem[] = [
  {
    id: 'planificacion-3d',
    indexNumber: '01',
    title: 'Planificación Digital 3D',
    description: 'Antes de intervenir, diseñamos tu tratamiento en 3D: posicionamiento diente por diente, simulación de resultado y ejecución de precisión.',
    iconName: 'ScanFace',
  },
  {
    id: 'odontologia-integral',
    indexNumber: '02',
    title: 'Odontología Integral, Bajo Un Solo Techo',
    description: 'Desde una limpieza hasta una rehabilitación oral completa: estética, prótesis, cirugía e implantes en un mismo consultorio, sin derivarte a media atención.',
    iconName: 'Layers',
  },
  {
    id: 'casos-reales',
    indexNumber: '03',
    title: 'Casos Reales, Resultados Documentados',
    description: 'Cada tratamiento queda registrado con fotografía clínica antes/después — la transparencia es parte del proceso, no un extra de marketing.',
    iconName: 'FileCheck2',
  },
];

export const TREATMENTS_LIST: TreatmentItem[] = [
  {
    id: 'blanqueamiento',
    name: 'Blanqueamiento / Aclaramiento Dental',
    description: 'Sesiones de aclaramiento profesional para recuperar el tono natural de tu esmalte, sin sensibilidad innecesaria.',
    iconName: 'Sparkles',
    badge: 'Estética',
  },
  {
    id: 'diseno-sonrisa',
    name: 'Diseño de Sonrisa y Restauraciones Estéticas',
    description: 'Resinas, carillas e incrustaciones CAD-CAM (E.max) que devuelven forma y color a tu sonrisa.',
    iconName: 'Smile',
    badge: 'CAD-CAM E.max',
  },
  {
    id: 'rehabilitacion-oral',
    name: 'Rehabilitación Oral Integral',
    description: 'Para casos complejos: reconstruimos función y estética combinando varias especialidades en un solo plan.',
    iconName: 'Sparkle',
    badge: 'Casos complejos',
  },
  {
    id: 'implantes-dentales',
    name: 'Implantes Dentales',
    description: 'Reemplazo de piezas perdidas con planificación digital 3D previa, para una integración predecible.',
    iconName: 'Activity',
    badge: 'Precisión 3D',
  },
  {
    id: 'alineadores-invisibles',
    name: 'Alineadores Invisibles',
    description: 'Corrección de posición dental sin brackets metálicos, con seguimiento fotográfico de cada etapa.',
    iconName: 'EyeOff',
    badge: 'Ortodoncia digital',
  },
  {
    id: 'protesis-removible',
    name: 'Prótesis Removible',
    description: 'Soluciones protésicas para recuperar función masticatoria con comodidad.',
    iconName: 'ShieldCheck',
    badge: 'Funcionalidad',
  },
  {
    id: 'cirugia-oral',
    name: 'Cirugía Oral',
    description: 'Extracciones y procedimientos quirúrgicos con protocolo de bioseguridad y seguimiento post-operatorio.',
    iconName: 'HeartPulse',
    badge: 'Bioseguridad',
  },
  {
    id: 'odontologia-general',
    name: 'Odontología General y Salud Oral',
    description: 'Limpiezas, diagnóstico y prevención — la base de cualquier tratamiento posterior.',
    iconName: 'Stethoscope',
    badge: 'Prevención',
  },
];

export const CLINIC_VALUES: ClinicValue[] = [
  {
    id: 'precision-digital',
    title: 'Precisión digital',
    description: 'Planificamos antes de actuar.',
    iconName: 'Cpu',
  },
  {
    id: 'transparencia-clinica',
    title: 'Transparencia clínica',
    description: 'Mostramos el proceso, no solo el resultado.',
    iconName: 'SearchCheck',
  },
  {
    id: 'bioseguridad-estricta',
    title: 'Bioseguridad estricta',
    description: 'Protocolo documentado en cada procedimiento.',
    iconName: 'Shield',
  },
  {
    id: 'atencion-cita',
    title: 'Atención bajo cita',
    description: 'Tiempo dedicado, sin sala de espera saturada.',
    iconName: 'CalendarClock',
  },
];

export const ABOUT_CLINIC_COPY = 
  'dent.ec nace de la idea de que la odontología integral no debería sentirse fragmentada. Bajo la dirección clínica del Dr. David Barrera, especialista en rehabilitación oral y estética dental, el equipo combina planificación digital 3D, materiales de alta precisión y un protocolo de bioseguridad estricto para acompañarte desde la primera limpieza hasta el tratamiento más complejo — todo en Samborondón.';

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'nota-manuscrita',
    content: 'El equipo recibió una hermosa nota manuscrita de una paciente agradeciendo la dedicación y el cuidado: "Gracias por devolverme la tranquilidad al sonreír y por el trato tan humano". Un gesto real que resume el vínculo que se construye con cada paciente.',
    author: 'Sofía M.',
    tag: 'Nota manuscrita en clínica • Diseño de sonrisa',
    isHandwrittenNote: true,
    rating: 5,
  },
  {
    id: 'testimonio-carillas',
    content: 'Increíble la tecnología 3D. Me mostraron exactamente cómo iba a quedar mi sonrisa antes de tocar un solo diente. Me realicé carillas de porcelana y el resultado es ultra natural, justo lo que buscaba. ¡Cero dolor y un trato de primera!',
    author: 'Valeria R. de C.',
    tag: 'Diseño de Sonrisa & Carillas E.max',
    rating: 5,
  },
  {
    id: 'testimonio-implante',
    content: 'Llegué con mucho temor por un implante dental y una pieza rota. El Dr. David Barrera me explicó todo el paso a paso en pantalla con el escáner 3D. El procedimiento fue rapidísimo y la recuperación sin ninguna molestia. Totalmente recomendado.',
    author: 'Arq. Carlos V. Mendoza',
    tag: 'Implante Dental & Rehabilitación',
    rating: 5,
  },
  {
    id: 'testimonio-alineadores',
    content: 'Completé mi tratamiento de alineadores invisibles en dent.ec y el cambio fue espectacular. Nadie notaba que los llevaba y las citas de control siempre puntuales en Samborondón, sin esperas innecesarias.',
    author: 'Doménica A. Morales',
    tag: 'Ortodoncia con Alineadores Invisibles',
    rating: 5,
  },
  {
    id: 'testimonio-blanqueamiento',
    content: 'Me realicé un blanqueamiento dental profesional previo a mi boda. El tono quedó blanquísimo y súper uniforme, y lo mejor es que no tuve nada de sensibilidad. La clínica es impecable y la atención de todo el staff 10/10.',
    author: 'Andrés Viteri P.',
    tag: 'Aclaramiento Dental Profesional',
    rating: 5,
  },
  {
    id: 'testimonio-general',
    content: 'La mejor experiencia odontológica en Samborondón. Te explican con total honestidad qué necesitas sin inventar procedimientos de más. Se siente la diferencia de una clínica moderna con verdadera calidez humana.',
    author: 'María José Echeverría',
    tag: 'Rehabilitación Oral y Prevención',
    rating: 5,
  },
];

export const TREATMENT_OPTIONS: TreatmentOption[] = [
  'Blanqueamiento dental',
  'Diseño de sonrisa',
  'Rehabilitación oral',
  'Implantes dentales',
  'Alineadores invisibles',
  'Cirugía oral',
  'Odontología general',
  'Otro',
];

export const SITUATION_OPTIONS: SituationOption[] = [
  'Quiero mejorar mi estética',
  'Tengo una molestia o dolor',
  'Ya tengo un diagnóstico y busco segunda opinión',
  'Busco rehabilitación oral completa',
];

export const SCHEDULE_OPTIONS: ScheduleOption[] = ['Mañana', 'Tarde'];

export const STAFF_WHATSAPP_SCRIPT = {
  title: 'Guion de WhatsApp de Recepción (para el equipo de dent.ec)',
  description: 'Mensaje automatizado o pauta de respuesta tras recibir el lead del formulario:',
  template: `¡Hola [Nombre]! 👋 Soy del equipo de dent.ec. Vimos que te interesa [Tratamiento] y tu horario preferente es [Horario].

Antes de confirmar tu valoración con el Dr. Barrera:
• [si Situación = "Tengo una molestia o dolor"]: ¿desde cuándo sientes esa molestia?
• [si Situación = "Ya tengo un diagnóstico"]: ¿podrías contarnos qué te indicó tu odontólogo anterior?
• [en cualquier otro caso]: ¿es la primera vez que exploras este tratamiento?

Con esa info te agendamos la valoración ideal — solo dime qué día de esta semana te queda mejor y te confirmo el cupo. 🦷✨`,
};
