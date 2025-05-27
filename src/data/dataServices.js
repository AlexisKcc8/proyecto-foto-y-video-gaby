import SesionesFotográficas from "@assets/our-services/Sesiones-fotográficas.webp";
import CoberturaEventos from "@assets/our-services/Cobertura-eventos.webp";
import ProducciónVideo from "@assets/our-services/Producción-video.webp";
import FotografíaDocumentos from "@assets/our-services/Fotografía-documentos.webp";
import formatosDigitales from "@assets/our-services/formatos-digitales.webp";
import ImpresiónFotos from "@assets/our-services/Impresión-fotos.webp";

export const ourServices = [
  {
    id: crypto.randomUUID(),
    title: "📸 Sesiones fotográficas (individuales, familiares, infantiles)",
    urlImage: SesionesFotográficas,
  },
  {
    id: crypto.randomUUID(),
    title: "💍 Cobertura de eventos (bodas, XV años, bautizos, graduaciones)",
    urlImage: CoberturaEventos,
  },
  {
    id: crypto.randomUUID(),
    title: "🎥 Producción de video profesional",
    urlImage: ProducciónVideo,
  },
  {
    id: crypto.randomUUID(),
    title: "🖼️ Impresión de fotos y ampliaciones",
    urlImage: ImpresiónFotos,
  },
  {
    id: crypto.randomUUID(),
    title:
      "📷 Fotografía para documentos (Titulos Profesionales, INE, pasaporte, etc.)",
    urlImage: FotografíaDocumentos,
  },
  {
    id: crypto.randomUUID(),
    title: "📀 Entrega en formatos digitales y físicos (USB y álbumes)",
    urlImage: formatosDigitales,
  },
];
