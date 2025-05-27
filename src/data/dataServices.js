import SesionesFotográficas from "@assets/our-services/Sesiones-fotográficas-individuales.jpg";
import CoberturaEventos from "@assets/our-services/Cobertura-eventos.jpg";
import ProducciónVideo from "@assets/our-services/Producción-video.jpg";
import FotografíaDocumentos from "@assets/our-services/Fotografía-documentos.jpg";
import formatosDigitales from "@assets/our-services/formatos-digitales.jpg";
import ImpresiónFotos from "@assets/our-services/Impresión-fotos.jpg";

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
