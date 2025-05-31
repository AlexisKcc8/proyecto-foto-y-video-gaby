import catrina from "@assets/footer/catrina.jpg";
import meztiza from "@assets/footer/mestiza.jpg";
import niña from "@assets/footer/sesion-niña.jpg";
import xvAmarillo from "@assets/footer/xv-amarillo.jpg";
import xvRojo from "@assets/footer/xv-rojo.jpg";
import xvVerde from "@assets/footer/xv-verde.jpg";

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
