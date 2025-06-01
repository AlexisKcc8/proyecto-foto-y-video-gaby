import catrina from "@assets/footer/catrina.webp";
import meztiza from "@assets/footer/mestiza.webp";
import niña from "@assets/footer/sesion-niña.webp";
import xvAmarillo from "@assets/footer/xv-amarillo.webp";
import xvVerde from "@assets/footer/xv-verde.webp";

export const imgsFooter = [
  {
    id: crypto.randomUUID(),
    urlImage: meztiza,
  },
  {
    id: crypto.randomUUID(),
    urlImage: catrina,
    mobileOnly: true,
  },
  {
    id: crypto.randomUUID(),
    urlImage: niña,
    mobileOnly: true,
  },
  {
    id: crypto.randomUUID(),
    urlImage: xvVerde,
    mobileOnly: true,
  },
  {
    id: crypto.randomUUID(),
    urlImage: xvAmarillo,
  },
];
